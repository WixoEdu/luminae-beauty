'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './BookingModal.module.css'
import { SLOTS_BY_DAY, SERVICES, MONTH_NAMES } from '@/lib/slots'

interface Props {
  isOpen: boolean
  onClose: () => void
}

type Step = 'service' | 'calendar' | 'time' | 'details' | 'confirmation'

const DAY_NAMES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

function fmt(d: Date) {
  return d.toISOString().split('T')[0]
}

export default function BookingModal({ isOpen, onClose }: Props) {
  const [step, setStep]               = useState<Step>('service')
  const [service, setService]         = useState('')
  const [date, setDate]               = useState<Date | null>(null)
  const [month, setMonth]             = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })
  const [time, setTime]               = useState('')
  const [booked, setBooked]           = useState<string[]>([])
  const [loadingSlots, setLoading]    = useState(false)
  const [form, setForm]               = useState({ name: '', email: '', phone: '', notes: '' })
  const [submitting, setSubmitting]   = useState(false)
  const [apiError, setApiError]       = useState('')

  // Fetch booked slots whenever date changes
  useEffect(() => {
    if (!date) return
    setLoading(true)
    fetch(`/api/bookings?date=${fmt(date)}`)
      .then(r => r.json())
      .then(d => setBooked(d.booked ?? []))
      .catch(() => setBooked([]))
      .finally(() => setLoading(false))
  }, [date])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [isOpen])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const reset = useCallback(() => {
    setStep('service')
    setService('')
    setDate(null)
    setTime('')
    setBooked([])
    setForm({ name: '', email: '', phone: '', notes: '' })
    setApiError('')
  }, [])

  const handleClose = useCallback(() => {
    reset()
    onClose()
  }, [reset, onClose])

  const isDisabled = (d: Date) => {
    const today = new Date(); today.setHours(0,0,0,0)
    return d < today || d.getDay() === 0
  }

  const year  = month.getFullYear()
  const mon   = month.getMonth()
  const days  = new Date(year, mon + 1, 0).getDate()
  // Convert Sunday-first (getDay) to Monday-first offset
  const offset = (new Date(year, mon, 1).getDay() + 6) % 7

  const pickDate = (day: number) => {
    const d = new Date(year, mon, day)
    if (isDisabled(d)) return
    setDate(d)
    setTime('')
    setStep('time')
  }

  const pickTime = (t: string) => {
    if (booked.includes(t)) return
    setTime(t)
    setStep('details')
  }

  const submit = async () => {
    if (!date || !time || !service) return
    setSubmitting(true)
    setApiError('')
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service, date: fmt(date), time_slot: time }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Error inesperado')
      setStep('confirmation')
    } catch (e) {
      setApiError(e instanceof Error ? e.message : 'Error inesperado')
    } finally {
      setSubmitting(false)
    }
  }

  const slots = date ? (SLOTS_BY_DAY[date.getDay()] ?? []) : []
  const STEPS = ['service', 'calendar', 'time', 'details'] as const
  const stepIdx = STEPS.indexOf(step as typeof STEPS[number])

  if (!isOpen) return null

  return (
    <div className={styles.backdrop} onMouseDown={e => { if (e.target === e.currentTarget) handleClose() }}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Reservar cita">

        {/* ── Header ── */}
        <div className={styles.header}>
          <div>
            <p className={styles.brand}>La Clinique</p>
            <h2 className={styles.title}>Reservar experiencia</h2>
          </div>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Cerrar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 2l12 12M14 2L2 14"/>
            </svg>
          </button>
        </div>

        {/* ── Progress bar ── */}
        {step !== 'confirmation' && (
          <div className={styles.progress}>
            {(['Servicio', 'Fecha', 'Horario', 'Datos'] as const).map((label, i) => (
              <div
                key={label}
                className={[
                  styles.pStep,
                  i < stepIdx ? styles.pDone : '',
                  i === stepIdx ? styles.pActive : '',
                ].join(' ')}
              >
                <div className={styles.pDot}>
                  {i < stepIdx
                    ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1.5 5l2.5 2.5 4.5-4.5"/></svg>
                    : i + 1
                  }
                </div>
                <span className={styles.pLabel}>{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── Body ── */}
        <div className={styles.body}>

          {/* Step 1 — Service */}
          {step === 'service' && (
            <div className={styles.stepWrap}>
              <p className={styles.stepTitle}>¿Qué experiencia deseas reservar?</p>
              <div className={styles.serviceGrid}>
                {SERVICES.map(s => (
                  <button
                    key={s}
                    className={[styles.serviceBtn, service === s ? styles.serviceBtnSelected : ''].join(' ')}
                    onClick={() => { setService(s); setStep('calendar') }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Calendar */}
          {step === 'calendar' && (
            <div className={styles.stepWrap}>
              <p className={styles.stepTitle}>Selecciona una fecha</p>
              <div className={styles.calendar}>
                {/* Nav */}
                <div className={styles.calNav}>
                  <button
                    className={styles.calNavBtn}
                    onClick={() => setMonth(m => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
                    aria-label="Mes anterior"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 3L5 8l5 5"/></svg>
                  </button>
                  <span className={styles.calMonthLabel}>{MONTH_NAMES[mon]} {year}</span>
                  <button
                    className={styles.calNavBtn}
                    onClick={() => setMonth(m => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
                    aria-label="Mes siguiente"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3l5 5-5 5"/></svg>
                  </button>
                </div>
                {/* Day headers */}
                <div className={styles.calDayNames}>
                  {DAY_NAMES.map(d => <span key={d}>{d}</span>)}
                </div>
                {/* Day grid */}
                <div className={styles.calGrid}>
                  {Array.from({ length: offset }).map((_, i) => <div key={`e${i}`} />)}
                  {Array.from({ length: days }).map((_, i) => {
                    const day  = i + 1
                    const d    = new Date(year, mon, day)
                    const dis  = isDisabled(d)
                    const sel  = date?.toDateString() === d.toDateString()
                    const today = new Date().toDateString() === d.toDateString()
                    return (
                      <button
                        key={day}
                        disabled={dis}
                        onClick={() => pickDate(day)}
                        className={[
                          styles.calDay,
                          dis   ? styles.calDayDisabled : '',
                          sel   ? styles.calDaySelected : '',
                          today ? styles.calDayToday    : '',
                        ].join(' ')}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>
              <p className={styles.calHint}>Los domingos no hay atención · Las fechas pasadas no están disponibles</p>
            </div>
          )}

          {/* Step 3 — Time slots */}
          {step === 'time' && date && (
            <div className={styles.stepWrap}>
              <p className={styles.stepTitle}>
                Elige tu horario —{' '}
                <em>{date.getDate()} de {MONTH_NAMES[date.getMonth()]}</em>
              </p>
              {loadingSlots ? (
                <div className={styles.loadingSlots}>
                  <span className={styles.spinner} />
                  Verificando disponibilidad…
                </div>
              ) : slots.length === 0 ? (
                <p className={styles.noSlots}>No hay horarios disponibles este día.</p>
              ) : (
                <div className={styles.slotsGrid}>
                  {slots.map(slot => {
                    const occ = booked.includes(slot)
                    const sel = time === slot
                    return (
                      <button
                        key={slot}
                        disabled={occ}
                        onClick={() => pickTime(slot)}
                        className={[
                          styles.slot,
                          occ ? styles.slotBooked   : '',
                          sel ? styles.slotSelected : '',
                        ].join(' ')}
                        title={occ ? 'Horario ocupado' : 'Disponible'}
                      >
                        <span className={styles.slotTime}>{slot}</span>
                        {occ && <span className={styles.slotTag}>Ocupado</span>}
                        {!occ && <span className={styles.slotTag}>Disponible</span>}
                      </button>
                    )
                  })}
                </div>
              )}
              <div className={styles.legend}>
                <span className={styles.legendFree} />Disponible
                <span className={styles.legendBusy} />Ocupado
              </div>
              <button className={styles.backBtn} onClick={() => setStep('calendar')}>← Cambiar fecha</button>
            </div>
          )}

          {/* Step 4 — Personal details */}
          {step === 'details' && (
            <div className={styles.stepWrap}>
              <p className={styles.stepTitle}>Completa tus datos</p>
              {/* Summary pill */}
              <div className={styles.summary}>
                <span>{service}</span>
                <span className={styles.dot}>·</span>
                <span>{date?.getDate()} {MONTH_NAMES[date!.getMonth()]}</span>
                <span className={styles.dot}>·</span>
                <span>{time}</span>
              </div>
              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span>Nombre completo *</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </label>
                <label className={styles.field}>
                  <span>Correo electrónico *</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="tu@correo.com"
                    autoComplete="email"
                  />
                </label>
                <label className={[styles.field, styles.fieldFull].join(' ')}>
                  <span>WhatsApp *</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+506 0000 0000"
                    autoComplete="tel"
                  />
                </label>
                <label className={[styles.field, styles.fieldFull].join(' ')}>
                  <span>Notas (opcional)</span>
                  <textarea
                    value={form.notes}
                    onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                    placeholder="¿Hay algo que debamos saber sobre tu piel o expectativas?"
                    rows={3}
                  />
                </label>
              </div>

              {apiError && <p className={styles.apiError}>{apiError}</p>}

              <div className={styles.detailsActions}>
                <button className={styles.backBtn} onClick={() => setStep('time')}>← Cambiar horario</button>
                <button
                  className={styles.submitBtn}
                  onClick={submit}
                  disabled={submitting || !form.name || !form.email || !form.phone}
                >
                  {submitting ? 'Agendando…' : 'Confirmar reserva →'}
                </button>
              </div>
            </div>
          )}

          {/* Step 5 — Confirmation */}
          {step === 'confirmation' && (
            <div className={styles.confirmation}>
              <div className={styles.checkCircle}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 14l6 6L23 8"/>
                </svg>
              </div>
              <h3 className={styles.confTitle}>¡Reserva confirmada!</h3>
              <p className={styles.confSub}>Te contactaremos por WhatsApp para confirmar tu experiencia.</p>
              <div className={styles.confCard}>
                <p className={styles.confService}>{service}</p>
                <p className={styles.confDate}>
                  {date?.getDate()} de {MONTH_NAMES[date!.getMonth()]} · {time}
                </p>
                <p className={styles.confName}>{form.name} · {form.phone}</p>
              </div>
              <button className={styles.submitBtn} onClick={handleClose}>Cerrar</button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
