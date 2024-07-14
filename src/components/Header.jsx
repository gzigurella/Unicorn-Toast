'use client';

import Logo from './Logo';
import { usePathname } from 'next/navigation';
import {FaEnvelope, FaLinkedin} from 'react-icons/fa6';
import {FaMailBulk} from "react-icons/fa";

export default () => {
    const pathname = usePathname();

    return (
        <nav className="bg-transparent mt-6 w-full md:static md:text-sm md:border-none">
            <div className='flex flex-1 flex-row justify-between items-center mx-10'>
                <Logo />
            </div>
        </nav>
    )
}