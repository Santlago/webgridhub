"use client"

import { createContext } from 'react'
import Client from '../services/Client'

export const ClientContext = createContext(new Client())

interface ClientProviderProps {
  children: React.ReactNode;
}

export default function ClientProvider({
  children,
}: ClientProviderProps) {
  return (
    <ClientContext.Provider value={new Client()}>
      {children}
    </ClientContext.Provider>
  )
}
