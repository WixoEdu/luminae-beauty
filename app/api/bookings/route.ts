import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'
import { SLOTS_BY_DAY } from '@/lib/slots'

// GET /api/bookings?date=YYYY-MM-DD
// Returns the list of already-booked time slots for that date.
export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get('date')
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: 'date param required (YYYY-MM-DD)' }, { status: 400 })
  }

  try {
    const supabase = createServerSupabase()
    const { data, error } = await supabase
      .from('bookings')
      .select('time_slot')
      .eq('date', date)
      .neq('status', 'cancelled')

    if (error) throw error
    return NextResponse.json({ booked: (data ?? []).map((r) => r.time_slot) })
  } catch (err) {
    console.error('[GET /api/bookings]', err)
    return NextResponse.json({ error: 'Error al consultar disponibilidad' }, { status: 500 })
  }
}

// POST /api/bookings
// Creates a new booking after verifying the slot is still free.
export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Body inválido' }, { status: 400 })
  }

  const { name, email, phone, service, date, time_slot, notes } = body

  if (!name || !email || !phone || !service || !date || !time_slot) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  // Validate time_slot belongs to the day's allowed slots
  const dayOfWeek = new Date(date + 'T12:00:00').getDay()
  if (!SLOTS_BY_DAY[dayOfWeek]?.includes(time_slot)) {
    return NextResponse.json({ error: 'Horario no válido para este día' }, { status: 400 })
  }

  try {
    const supabase = createServerSupabase()

    // Race-condition check: re-verify slot is still free
    const { data: existing } = await supabase
      .from('bookings')
      .select('id')
      .eq('date', date)
      .eq('time_slot', time_slot)
      .neq('status', 'cancelled')
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        { error: 'Este horario acaba de ser reservado. Por favor elige otro.' },
        { status: 409 }
      )
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert({ name, email, phone, service, date, time_slot, notes: notes ?? '' })
      .select('id')
      .single()

    if (error) throw error
    return NextResponse.json({ id: data.id, success: true }, { status: 201 })
  } catch (err) {
    console.error('[POST /api/bookings]', err)
    return NextResponse.json({ error: 'Error al crear la reserva' }, { status: 500 })
  }
}
