import type { Metadata } from "next"
import "../globals.css"
import { Footer } from './components/Footer'
import { Header } from './components/Header'

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
      <Header />
      <main className='grow p-4 container mx-auto flex'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
