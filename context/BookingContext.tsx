'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import BookingModal from '@/components/BookingModal'

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
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingContext.Provider>
  )
}
