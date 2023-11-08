'use client';

import Logo from './ZiguLogo';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaCircleInfo, FaGithubAlt, FaLinkedin, FaPenRuler, FaMastodon, FaCompassDrafting } from 'react-icons/fa6';

export default () => {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { title: "About", path: "/", color: "text-purple-300"},
        { title: "CV", path: "/cv", color: "text-yellow-300"},
        { title: "Blog", path: "/blog", color: "text-green-300"},
    ]

    const socials = [
        { title: "Github", path: "https://github.com/gzigurella", color: "text-brown-300"},
        { title: "LinkedIn", path: "https://www.linkedin.com/in/gabrielezigurella?trk=public_profile_browsemap", color: "text-indigo-400"},
        //{ title: "Mastodoon" path: "", color: "text-cyan-300"},
    ]

    return (
        <nav className="bg-zinc-600 md:bg-transparent border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Logo />
                    <div className="md:hidden ml-auto">
                        <button className="text-slate-100 hover:text-purple-300"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            {
                                showMenu ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${showMenu ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href={item.path} className={`hover:underline ${pathname === item.path ? `underline ${item.color}` : "text-slate-100"} 
                                            flex items-center justify-start w-full hover:cursor-pointer gap-x-1`}>
                                            {item.title === "About" && <FaCircleInfo className='mr-1'/>}
                                            {item.title === "Blog" && <FaPenRuler className='mr-1'/>}
                                            {item.title === "CV" && <FaCompassDrafting className='mr-1'/>}
                                            <span className='text-md'>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </div>
                        <span className='hidden w-px h-8 md:block'></span>
                        <div className='items-center gap-x-2 flex align-center md:space-y-0'>
                        {
                            socials.map((item, idx) => {
                                return (
                                    <li key={idx} >
                                        <a href={item.path} target="_blank" className='flex items-center justify-start w-full hover:cursor-pointer 
                                            gap-x-1 text-slate-100 text-2xl'>
                                            {item.title === "Github" && <FaGithubAlt className='mr-1'/>}
                                            {item.title === "LinkedIn" && <FaLinkedin className='mr-1'/>}
                                            {item.title === "Mastodoon" && <FaMastodon className='mr-1'/>}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}