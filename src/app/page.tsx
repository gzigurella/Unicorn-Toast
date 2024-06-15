'use client';

import QuantumHero from '../../public/QuantumHero.png'
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import Typewriter from 'typewriter-effect';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function Page() {
  const words = ['“The disruptive potential of <b>quantum technology</b> will make the change of<br/>the Internet era look like a small bump in the road!” - <i>Kevin Coleman</i>'];

  return (
    <div className="flex flex-col items-center content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
      <div>
        <span className={`text-7xl font-bold ${montserrat.variable}`}>Delivering the future...</span>
        <div id="typewriter-hero" className={`md:ml-10 mt-3 flex text-xl h-6 font-light text-center text-gray-600 ${montserrat.variable}`}>                
          <Typewriter 
          onInit={(typewriter) => {
            typewriter.changeDelay(50).typeString(words[0]).start().pauseFor(Number.MAX_SAFE_INTEGER);
          }}
          
          options={{ cursor: ""}}
          />
        </div>
      </div>
      <div className='mx-2 mt-24'>
          <div className='relative z-0'>
            <Image width={1280} className='rounded-3xl relative z-0' src={QuantumHero} alt='Landing page Image of a Quantum Computer, Image generated with a Diffusion Stabilizer'/>
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
    </div>
  )
}
