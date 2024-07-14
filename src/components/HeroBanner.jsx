import Image from "next/image";
import HeroButton from "./CTAButton";
import QuantumHero from '../../public/QuantumHero.png'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat'
  })

export default () => {
    return (<div id="quantum" className='hidden md:block lg:mx-2 mt-10'>
        <div className='relative z-0'>
          <Image className='lg:rounded-3xl relative z-0' src={QuantumHero} alt='Landing page Image of a Quantum Computer, Image generated with a Diffusion Stabilizer' />
          <div className='animate__animated animate__fadeInLeftBig absolute group flex flex-row items-center gap-x-4 pr-4 pl-11 py-3 justify-center top-[140px] -left-10 z-10 bg-slate-100 rounded-3xl hover:cursor-pointer'>
            <span className={`${montserrat.variable} font-light text-wrap`}>Data Classification with <span className='font-medium'>Quantum Machine Learning</span></span>
            <HeroButton link={"/blog/01-QML"} color={"purple"} />
          </div>
          <div className='animate__animated animate__fadeInLeftBig animate__delay-1s absolute group flex flex-row items-center gap-x-4 pr-4 pl-11 py-3 justify-center top-[220px] -left-10 z-10 bg-slate-100 rounded-3xl hover:cursor-pointer'>
            <span className={`${montserrat.variable} font-light text-wrap`}>Should you learn Quantum Computing during <span className='font-medium'>NISQ</span> era?</span>
            <HeroButton link={"/blog/00-NISQ"} color={"purple"} />
          </div>
          <div className='animate__animated animate__fadeInLeftBig animate__delay-2s absolute group flex flex-row items-center gap-x-4 pr-4 pl-11 py-3 justify-center top-[300px] -left-10 z-10 bg-slate-100 rounded-3xl hover:cursor-pointer'>
            <span className={`${montserrat.variable} font-light text-wrap`}>Financial Risk Analysis with <span className='font-medium'>Quantum Montecarlo Methods</span></span>
            <HeroButton link={"/blog/02-QMC"} color={"purple"} />
          </div>
        </div>
      </div>);
}