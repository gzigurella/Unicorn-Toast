'use client';

import Projects from '../components/Projects'
import Footer from '../components/Footer'
import HeroCTA from "../components/HeroCTA";
import VerticalMenu from "@/components/VerticalMenu";
import HorizontalMenu from "@/components/HorizontalMenu";
import {useEffect, useState} from "react";

export default function Page() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`/projects`)
            .then((response) =>
                response.json()
            ).then(data => setProjects(data));
    }, []);

    return (
      <div className="flex min-h-screen min-w-screen h-screen w-screen">
          <div className="block md:hidden fixed top-0 left-0 w-screen">
              <HorizontalMenu />
          </div>
          <div
              className="flex flex-col items-start content-start text-gray-800">
              <HeroCTA/>
              <Projects projects={projects}/>
              <Footer/>
          </div>
          <div className="hidden md:block fixed top-[50%] left-[5%]">
              <VerticalMenu />
          </div>
      </div>
    )
}
