'use client';

import Projects from '../components/Projects'
import HeroHeader from '../components/HeroHeader'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'
import HeroCTA from "../components/HeroCTA";
import VerticalMenu from "@/components/VerticalMenu";

export default function Page() {
  return (
      <div className="flex min-h-screen min-w-screen h-screen w-screen">
          <div
              className="flex flex-col items-start content-start text-gray-800">
              <HeroCTA/>
              <Projects/>
              <Footer/>
          </div>
          <div className="fixed top-[50%] right-[10%]">
              <VerticalMenu />
          </div>
      </div>
  )
}
