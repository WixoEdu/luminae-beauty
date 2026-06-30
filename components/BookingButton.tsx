'use client'

import { useBooking } from '@/context/BookingContext'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function BookingButton({ children, className }: Props) {
  const { open } = useBooking()
  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  )
}
