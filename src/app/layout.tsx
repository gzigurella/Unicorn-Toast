import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriele Zigurella',
  description: 'Personal Website | Hosted on Vercel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen min-w-screen h-screen w-screen ${inter.className}`}>
        <Suspense fallback={<Loading />}>
        <Navbar />
        <main>
          {children}
        </main>
        </Suspense>
      </body>
    </html>
  )
}
