'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Peep from '../../public/peep-about.svg'
import { FaHandPointRight } from 'react-icons/fa6';

interface TemplateProps {
  name: string;
  surname: string;
  job: string;
  hobby: string;
  interest: string;
}

function Template({name, surname, job, hobby, interest} : TemplateProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className="container">
      <span className="text-4xl font-bold">Hello there!</span><br/>I'm <span className="text-lg text-purple-300">{name} {surname}</span> and I currently hold a position as <span className="text-cyan-300">{job}</span>,<br/>
      <span> where I bring my unique blend of creativity and determination to the table each day. <br/><br/> It is in the world of <span className="text-yellow-300">{hobby}</span> where my true passions lie. 
      Its' a place that provides me with endless opportunities to be creative and explore new possibilities. 
      <br/><br/>While my professional pursuits keep me busy I cannot help but be fueled by an insatiable curiosity. 
      <br/>At this moment in time my interest lies in {interest}. 

      <a href='mailto:gzigurella99@proton.me?
        subject=Hello%20Gabriele!
        &body=I%20would%20like%20to%20get%20in%20touch%20with%20you%20to%20discuss%20about%20...'>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="mt-6 flex items-center gap-2 px-4 py-2 text-indigo-600 bg-purple-200 rounded-lg duration-150 hover:bg-yellow-200 hover:text-black active:bg-indigo-200">
          {isHovered &&<FaHandPointRight />}
          Get in touch
        </button>
      </a>
    </span>
    </div>
  );
}

export default function Page() {
  
  return (
    <div className="mx-auto min-h-screen min-w-screen h-screen w-screen text-slate-100">
      <div className="flex items-center justify-center mt-10">
        <div id="picture" className="w-2/5 relative">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D8B4FE" d="M58.6,-50.8C69.9,-32.6,68.7,-8.6,63.8,15.2C58.9,39.1,50.3,62.8,33.6,71.4C17,80,-7.7,73.5,-25.5,61.6C-43.3,49.7,-54.3,32.3,-56.7,14.9C-59.2,-2.5,-53.1,-20,-42.2,-38.1C-31.3,-56.2,-15.7,-75,4,-78.2C23.7,-81.4,47.4,-69,58.6,-50.8Z" transform="translate(100 100)" />
          </svg>
          <Image src={Peep} alt="Peep" className='absolute lg:bottom-10 bottom-0 right-0' width={500}/>
        </div>
        <div id="text" className="w-3/5">
          <Template name="Gabriele" surname="Zigurella" job="Software Engineer"
          hobby="UX/UI Design" interest="Artificial Intelligence" />
        </div>
      </div>
    </div>
  )
}
