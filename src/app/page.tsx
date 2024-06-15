'use client';

import React, {useEffect, useState} from 'react';
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
        <div id="typewriter-hero" className={`md:ml-10 mt-3 flex text-xl font-light text-center text-gray-600 ${montserrat.variable}`}>                
                <Typewriter 
                onInit={(typewriter) => {
                  typewriter.changeDelay(55).typeString(words[0]).start().pauseFor(Number.MAX_SAFE_INTEGER);
                }}
                
                options={{ cursor: ""}}
                />
            </div>
      </div>
    </div>
  )
}
