'use client';

import { usePathname } from 'next/navigation'
import NavigationMenu from "./NavigationMenu";
import Logo from "./ZiguLogo";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="flex items-center justify-around w-full">
            <div className="w-full">
                <Logo />
            </div>
            <NavigationMenu active={pathname} />
        </div>
    );
}