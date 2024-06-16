import "rsuite/dist/rsuite.min.css";
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Gabriele Zigurella',
  description: 'Personal Website | Quantum Software Engineer & DevOps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen min-w-screen h-screen w-screen ${montserrat.className} bg-slate-100`}>
        <Navbar />
        <Suspense fallback={<Loading />}>
        <main className="mt-14">
          {children}
        </main>
        </Suspense>
      </body>
    </html>
  )
}
