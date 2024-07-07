import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Gabriele Zigurella',
  description: 'Personal Website | Quantum Software Engineer & DevOps',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mt-14">
      {children}
    </main>
  )
}
