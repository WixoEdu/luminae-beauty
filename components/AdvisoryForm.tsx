'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './AdvisoryForm.module.css'

type Field = 'name' | 'email' | 'phone' | 'goal'

const questions: { field: Field; question: string; placeholder: string; type: 'text' | 'email' | 'tel' | 'textarea'; required: boolean }[] = [
  { field: 'name',  question: '¿Cómo te llamas?',                                   placeholder: 'Escribe tu nombre completo', type: 'text',     required: true },
  { field: 'email', question: '¿Cuál es tu correo electrónico?',                    placeholder: 'tu@correo.com',              type: 'email',    required: true },
  { field: 'phone', question: '¿A qué WhatsApp te podemos contactar?',              placeholder: '+506 0000 0000',             type: 'tel',      required: true },
  { field: 'goal',  question: 'Cuéntanos, ¿qué te gustaría lograr con tu piel?',    placeholder: 'Escribe tu respuesta aquí…', type: 'textarea', required: false },
]

const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export type AdvisoryValues = Record<Field, string>

interface Props {
  onComplete: (values: AdvisoryValues) => void
}

export default function AdvisoryForm({ onComplete }: Props) {
  const [step, setStep]           = useState(0)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const [values, setValues]       = useState<Record<Field, string>>({ name: '', email: '', phone: '', goal: '' })
  const [error, setError]         = useState('')
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)

  const current = questions[step]
  const isLast = step === questions.length - 1

  useEffect(() => {
    inputRef.current?.focus()
  }, [step])

  const canAdvance = () => {
    const v = values[current.field].trim()
    if (!current.required) return true
    if (current.field === 'email') return v !== '' && emailValid(v)
    return v !== ''
  }

  const handleChange = (v: string) => setValues(prev => ({ ...prev, [current.field]: v }))

  // Fire-and-forget: save the lead without blocking the transition to booking.
  const saveInBackground = (finalValues: AdvisoryValues) => {
    fetch('/api/advisory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalValues),
    }).catch(err => console.error('[advisory] background save failed', err))
  }

  const goNext = () => {
    if (!canAdvance()) {
      setError(current.field === 'email' ? 'Ingresa un correo válido' : 'Este campo es obligatorio')
      return
    }
    setError('')
    if (isLast) {
      saveInBackground(values)
      onComplete(values)
    } else {
      setDirection('forward')
      setStep(s => s + 1)
    }
  }

  const goBack = () => {
    setError('')
    setDirection('backward')
    setStep(s => Math.max(0, s - 1))
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !(current.type === 'textarea' && e.shiftKey)) {
      e.preventDefault()
      goNext()
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
      </div>

      <div
        key={step}
        className={direction === 'forward' ? styles.stepForward : styles.stepBackward}
      >
        <p className={styles.counter}>{step + 1} <span>/ {questions.length}</span></p>

        <p className={styles.question}>
          <span className={styles.arrow}>→</span> {current.question}
          {!current.required && <span className={styles.optional}>(opcional)</span>}
        </p>

        {current.type === 'textarea' ? (
          <textarea
            ref={inputRef}
            className={styles.input}
            value={values[current.field]}
            onChange={e => handleChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={current.placeholder}
            rows={3}
          />
        ) : (
          <input
            ref={inputRef}
            className={styles.input}
            type={current.type}
            value={values[current.field]}
            onChange={e => handleChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={current.placeholder}
          />
        )}

        {error && <p className={styles.error}>{error}</p>}
      </div>

      <div className={styles.actions}>
        <div className={styles.actionsLeft}>
          {step > 0 && (
            <button className={styles.backBtn} onClick={goBack} type="button">← Atrás</button>
          )}
        </div>
        <div className={styles.actionsRight}>
          <span className={styles.hint}>presiona Enter ↵</span>
          <button className={styles.okBtn} onClick={goNext} type="button">
            {isLast ? 'Continuar →' : 'OK'}
          </button>
        </div>
      </div>
    </div>
  )
}
