import type { Metadata } from "next"
import ClientProvider from './context/ClientContext'
import "./globals.css"
import ToastProvider from './providers/ToastProvider'

export const metadata: Metadata = {
  title: "GridHub",
  description: "Solar energy to everybody",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientProvider>
      <html lang="en" data-theme="light">
        <body className="bg-base-100 min-h-screen flex flex-col">
            {children}
            <ToastProvider />
        </body>
      </html>
    </ClientProvider>
  )
}
