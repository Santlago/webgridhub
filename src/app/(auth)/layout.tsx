import type { Metadata } from "next"
import "../globals.css"
import { ThemeController } from '../components/ThemeController'

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
    <div className='bg-base-100 min-h-screen flex flex-col'>
      <div className='absolute top-2 right-2'>
        <ThemeController />
      </div>
      <main className='grow flex'>
        {children}
      </main>
    </div>
  )
}
