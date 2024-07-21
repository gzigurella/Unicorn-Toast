'use client'

import ProjectCard from './ProjectCard'
import Image from "next/image";
import {useEffect, useState} from "react";
import ProjectModalBody from "@/components/ProjectModalBody";

const Loading = () => {
    return  (
        <div className='flex items-center justify-center min-h-screen min-w-screen h-screen w-screen'>
            <div className="lds-grid">
                <div id="r1c1"></div>
                <div id="r1c2"></div>
                <div id="r1c3"></div>
                <div id="r2c1"></div>
                <div id="r2c2"></div>
                <div id="r2c3"></div>
                <div id="r3c1"></div>
                <div id="r3c2"></div>
                <div id="r3c3"></div>
            </div>
        </div>
    );
}

export default ({projects}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(projects && projects.length > 0) {
            setIsLoading(false);
        }
    }, [projects])

    return (
        <>
        {isLoading &&
           <Loading/>
        }
        {!isLoading &&
            <div id="projects" className='mt-10 ml-[40px] md:ml-[240px] max-w-screen'>
                        <div className='font-medium text-gray-600 text-xl md:text-2xl lg:text-3xl'>Projects</div>
                        <div className="flex flex-col md:flex-wrap md:flex-row justify-start mt-4 gap-x-2 gap-y-4">
                            {projects && projects.length > 0 &&
                                projects.map((project, idx) => {
                                    return (<ProjectCard
                                                    key={`project-${idx}`}
                                                    title={project.name}
                                                    description={project.shortDescription}
                                                    icon={<Image src={project.icon} width={70} height={70}
                                                    alt={project.alt}/>}
                                                    modalBody={<ProjectModalBody description={project.description} skillNames={project.skillNames}/>}/>);
                                })
                            }
                        </div>
            </div>
        }
        </>);
}