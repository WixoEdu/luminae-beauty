import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'

// POST /api/advisory
// Creates a new personalized-advisory request (Typeform-style lead form).
export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Body inválido' }, { status: 400 })
  }

  const { name, email, phone, goal } = body

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  try {
    const supabase = createServerSupabase()
    const { data, error } = await supabase
      .from('advisory_requests')
      .insert({ name, email, phone, goal: goal ?? '' })
      .select('id')
      .single()

    if (error) throw error
    return NextResponse.json({ id: data.id, success: true }, { status: 201 })
  } catch (err) {
    console.error('[POST /api/advisory]', err)
    return NextResponse.json({ error: 'Error al enviar tu solicitud' }, { status: 500 })
  }
}
