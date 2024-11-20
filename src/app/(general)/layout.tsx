import type { Metadata } from "next"
import "../globals.css"
import { Header } from './components/Header'
import { Footer } from './components/Footer'

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
    <html lang="en">
      <body className='bg-base-100 min-h-screen flex flex-col'>
        <Header />
        <main className='grow p-4 container mx-auto flex'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
