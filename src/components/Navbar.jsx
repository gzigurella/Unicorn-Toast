'use client';

import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { FaLinkedin } from 'react-icons/fa6';

export default () => {
    const pathname = usePathname();

    const navigation = [
        { title: "Innovation", path: "/#quantum", color: "text-slate-100"},
        { title: "Projects", path: "/#projects", color: "text-purple-600"},
        { title: "About", path: "/#about", color: "text-purple-600"}
    ]

    const CTA = { title: "Contact me", path: "https://www.linkedin.com/in/gabrielezigurella?trk=public_profile_browsemap", color: "text-slate-100"};

    return (
        <nav className="bg-transparent mt-6 w-full md:static md:text-sm md:border-none">
            <div className='flex flex-1 flex-row justify-between items-center mx-10'>
            <Logo />
            <ul className='flex flex-row items-center gap-x-2.5 mr-2'>
                {navigation.map((navItem) => <li key={`nav_${navItem.title}`} className='items-center'><a className={`font-light hover:font-medium hover:${navItem.color}`} href={navItem.path}>{navItem.title}</a></li>)}
                <a href={CTA.path} className='hover:no-underline'>
                    <button className='flex items-center gap-x-1 grow bg-gray-800 text-slate-100 px-3 py-2 rounded-full hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/50'>
                        <FaLinkedin size={18}/><span className='font-semibold'>{CTA.title}</span>
                    </button>
                </a>
            </ul>
            </div>
        </nav>
    )
}