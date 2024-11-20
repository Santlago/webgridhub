import type { Metadata } from "next"
import "../globals.css"
import { ThemeController } from '../components/ThemeController'
import ToastProvider from '../providers/ToastProvider'

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
    <body className='bg-base-100 min-h-screen flex flex-col'>
      <ThemeController />
      <main className='grow flex'>
        {children}
      </main>
      <ToastProvider />
    </body>
  )
}
