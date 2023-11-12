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
}

function Template({name, surname, job, hobby} : TemplateProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className="container text-md">
      <span className="2xl:text-8xl text-4xl font-bold">Hello there!</span><br/>I'm <span className="xl:text-lg text-md text-purple-300">{name} {surname}</span> and I currently hold a position as <span className="text-cyan-300">{job}</span>,<br/>
      <span> where I bring my unique blend of creativity and determination to the table each day. <br/><br/> It is in the world of <span className="text-yellow-300">{hobby}</span> where my true passions lie.<br/>
      Its' a place that provides me with endless opportunities to be creative and explore new possibilities. 

      <a href='mailto:jobs@gzigurella.dev?
        subject=Hello%20Gabriele!
        &body=I%20would%20like%20to%20get%20in%20touch%20with%20you%20to%20discuss%20about%20...' className='hover:no-underline'>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="mt-6 flex items-center gap-2 px-4 py-2 text-indigo-600 bg-purple-200 rounded-lg duration-150 hover:bg-violet-800 hover:text-black active:bg-indigo-200">
          {isHovered &&<FaHandPointRight />}
          Get in touch
        </button>
      </a>
    </span>
    </div>
  );
}

interface ListProps {
  techs: string[], title: string;
}

function List({techs, title} : ListProps) {
  return (
    <div>
      <div className='text-lg font-semibold'>{title}</div>
      <div className='flex flex-wrap'>
        {techs.map((item, idx) => {
          return (
              <div className='mr-2 mt-2' key={`techItemBg_${idx}_${title}`}>
                <span className='shadow-lg rounded-lg bg-violet-800 px-2 py-1' key={`techItem_${idx}_${title}`}>{item}</span>
              </div>
            );
        })}
      </div>
    </div>
  )
}

export default function Page() {
  const techStack : string[] = ["Bash", "Python", "JavaScript", "Node.js", "jQuery", "React.js", "Bootstrap", 
    "Java", "Quarkus", "GraalVM", "Liferay", "Elasticsearch", "Apache Lucene", "Apache Tomcat", "Apache Solr", 
    "Apache Kafka", "SQL", "PostgreSQL", "Neo4J", "MySQL", "BitBucket"];

  const techTitle : string = "What I work with";

  const cloudStack : string[] = ["Google Cloud Functions", "Google Pub/Sub", "Google Cloud Storage", "Google Compute Engine", "Google CloudSQL", "Google Artifact Registry", 
    "AWS EC2", "AWS Lambda", "AWS Lightsail", "Neon's PostgreSQL", "RedHat's OpenShift", "Docker", "Kubernetes", "Podman", "Minikube"];

  const cloudTitle : string = "The cloud ecosystem I use";

  const hobbyStack : string[] = ["Vercel", "Next.js", "Svelte", "Bun.js", "Deno.js", "Kotlin", "GitLab", "GitHub", "TypeScript", "Tailwind CSS", "Rabbit MQ"];

  const hobbyTitle : string= "What I have fun with";

  return (
    <div className="mx-auto min-h-screen min-w-screen h-screen w-screen text-slate-100">
      <div className="md:flex md:items-center md:justify-center mt-10">
        <div id="picture" className="md:w-1/2 relative">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D8B4FE" d="M58.6,-50.8C69.9,-32.6,68.7,-8.6,63.8,15.2C58.9,39.1,50.3,62.8,33.6,71.4C17,80,-7.7,73.5,-25.5,61.6C-43.3,49.7,-54.3,32.3,-56.7,14.9C-59.2,-2.5,-53.1,-20,-42.2,-38.1C-31.3,-56.2,-15.7,-75,4,-78.2C23.7,-81.4,47.4,-69,58.6,-50.8Z" transform="translate(100 100)" />
          </svg>
          <Image src={Peep} loading='eager' alt="Peep" className=' w-full absolute lg:left-8 bottom-0 right-0' width={500}/>
        </div>
        <div id="text" className="md:w-1/2 mx-10 mb-10 md:mx-0 md:mb-0 my-10 self-start">
          <Template name="Gabriele" surname="Zigurella" job="Software Engineer"
          hobby="Cloud & User Experience" />
          <div className='my-10'/>
          <div className='space-y-3 mb-5'>
            <List techs={techStack} title={techTitle}/>
            <List techs={cloudStack} title={cloudTitle}/>
            <List techs={hobbyStack} title={hobbyTitle}/>
          </div>
        </div>
      </div>
    </div>
  )
}
