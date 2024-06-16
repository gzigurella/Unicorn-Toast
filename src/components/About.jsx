import { FaDownload } from 'react-icons/fa6';

export default function () {
    return (
        <div id="about" className='mt-10 flex justify-between gap-x-20 px-20'>
            <div id="about-paragraph" className='flex flex-col'>
                <div className='font-semibold text-7xl'>
                    About me
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <div className='text-gray-400 font-normal text-lg'>
                            Description
                        </div>
                        <div className='font-light text-wrap text-base'>
                            <p>
                                <span className="italic">Raaawwrrr I'm a 🦖 dinosaur from Italy!</span><br />
                                I've been developing kinda my whole life, introduced to the sector by my elder brother at the age of 14 making it a whooping over 10 years of development!<br />
                                I started learning and developing in <span className="font-normal">PHP</span> along with my brother when he was working on Wordpress websites, later this sparked my passion to develop thing I use on a daily-basis.
                                Currently I'm programming in <span className="font-normal">Java</span> for my homelab where I handle family pictures and backups, while also playing with NLP (Natural Language Processors), <span className="font-normal">JavaScript</span> for hobby and work (this website is made with Next.js!), and automating the borin stuff with <span className="font-normal">Python</span> and <span className="font-normal">Shell scripting</span> (check out my GNU AWK replacemente <span className="italic font-normal">Lambda</span>).
                                <br />
                                Apart from software development I like to travel and play boardgames, I've worked in the UK in the past and it has been a blast. Really loved London.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='text-gray-400 font-normal text-lg'>
                            Training
                        </div>
                        <div className='font-light text-wrap text-base'>
                            <p>
                                During high school I've studied <span className='font-normal'>SQL, PHP along HTML and CSS</span>. This has been a small milestone towards what I do today.<br/>
                                Near the end of High School I've had my first proper work experience in a team, in London (UK) where I learned valuable lessons about coworking I still treasure to these days.<br/>
                                Finished High School I moved to the University of Pisa where I've been studying a lot of Programming Languages (<span className='font-normal'>C, OCaml, Java, Dart, R, MatLab, Python 3, JavaScript</span>) during courses of Algorithms and Programming Paradigms, Design Systems, common Development methods such as Scrum, Agile and Waterfall development.
                                I've also studied Computer Architectures and Operative Systems and how they work, along with fundamental of Artificial Intelligence and UX/UI design.
                                University gave me solid basis to be pretty much anything I wanted... therefore I've become a System Administrator ad Home (dear 127.0.0.1), a DevOps at work, and finally a Quantum Software Engineer in another startup.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='text-gray-400 font-normal text-lg'>
                            Work Experience & Current Position
                        </div>
                        <a href="/zigurella_gabriele_cv.pdf" className='hover:no-underline hover:text-white' target='_blank'>
                        <button class="flex gap-x-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-3xl">
                            <FaDownload size={16} />Download CV
                        </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}