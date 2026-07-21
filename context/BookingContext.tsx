'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import SkinQuizModal from '@/components/SkinQuizModal'

interface BookingContextValue {
  open: () => void
}

const BookingContext = createContext<BookingContextValue>({ open: () => {} })

export function useBooking() {
  return useContext(BookingContext)
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <SkinQuizModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingContext.Provider>
  )
}
