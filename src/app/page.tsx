'use client';

import Projects from '../components/Projects'
import About from '../components/About'
import HeroHeader from '../components/HeroHeader'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="flex flex-col items-center content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
      <HeroHeader />
      <HeroBanner />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
