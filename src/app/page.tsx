'use client';

import QuantumHero from '../../public/QuantumHero.png'
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import ProjectCard from '../components/ProjectCard'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function Page() {
  return (
    <div className="flex flex-col items-center content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
      <Hero />
      <div id="quantum" className='mx-2 mt-24'>
        <div className='relative z-0'>
          <Image width={1280} className='rounded-3xl relative z-0' src={QuantumHero} alt='Landing page Image of a Quantum Computer, Image generated with a Diffusion Stabilizer' />
          <div className='absolute group flex flex-row items-center gap-x-4 pr-4 pl-11 py-3 justify-center top-[140px] -left-10 z-10 bg-slate-100 rounded-3xl hover:cursor-pointer'>
            <span className={`${montserrat.variable} font-light text-wrap`}>Data Classification with <span className='font-medium'>Quantum Machine Learning</span></span>
            <button className='grow bg-gray-800 text-slate-100 group-hover:bg-purple-400 group-hover:shadow-md group-hover:shadow-purple-600/50 px-3 py-2 rounded-2xl'>Read more</button>
          </div>
          <div className='absolute group flex flex-row items-center gap-x-4 pr-4 pl-11 py-3 justify-center top-[220px] -left-10 z-10 bg-slate-100 rounded-3xl hover:cursor-pointer'>
            <span className={`${montserrat.variable} font-light text-wrap`}>Should you learn Quantum Computing during <span className='font-medium'>NISQ</span> era?</span>
            <button className='grow bg-gray-800 text-slate-100 group-hover:bg-purple-400 group-hover:shadow-md group-hover:shadow-purple-600/50 px-3 py-2 rounded-2xl'>Read more</button>
          </div>
          <div className='absolute group flex flex-row items-center gap-x-4 pr-4 pl-11 py-3 justify-center top-[300px] -left-10 z-10 bg-slate-100 rounded-3xl hover:cursor-pointer'>
            <span className={`${montserrat.variable} font-light text-wrap`}>Financial Risk Analysis with <span className='font-medium'>Quantum Montecarlo Methods</span></span>
            <button className='grow bg-gray-800 text-slate-100 group-hover:bg-purple-400 group-hover:shadow-md group-hover:shadow-purple-600/50 px-3 py-2 rounded-2xl'>Read more</button>
          </div>
        </div>
      </div>
      <div id="projects" className='mt-10 self-start'>
        <div className='ml-20'>
          <div className='font-semibold text-7xl'>Projects</div>
          <div className='font-light text-lg mt-2'>Pick a card to read more</div>
        </div>
        <div className='flex justify-around w-screen mt-4 px-20 gap-x-8'>
          <ProjectCard title={"Disentangling spaghetti code and making a safer space, a DevOps experience!"} link={""} />
          <ProjectCard title={"FAST: a guide on how Blockchains won't solve stakeholders problem!"} link={""} />
          <ProjectCard title={"Lambda: the pythonic toy replacement for GNU AWK"} link={""} />
        </div>
      </div>
      <About />
      <Footer />
    </div>
  )
}
