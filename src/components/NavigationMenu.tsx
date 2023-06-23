import { FaCircleInfo, FaGamepad, FaGithubAlt, FaLinkedin, FaPenRuler } from "react-icons/fa6";

interface NavigationMenuProps {
    active: string;
}

export default function NavigationMenu({ active } : NavigationMenuProps) {
    const socialLinks = {
        'github': 'https://github.com/gzigurella',
        'linkedin': 'https://www.linkedin.com/in/gabrielezigurella?trk=public_profile_browsemap',
    }

    return (
        <div className="flex flex-col md:flex-row items-center md:justify-end gap-8 mr-12 text-slate-200">
            <a href='/'>
                <div id="about" className={`flex items-center justify-start w-full
                hover:text-purple-300 hover:cursor-pointer ${active === '/' ? 'text-purple-300 underline' : ''}`}>
                        <FaCircleInfo className="mr-1" />
                        About
                </div>
            </a>
            <a href='/minigame'>
                <div id="minigame" className={`flex items-center justify-start w-full
                hover:text-yellow-300 hover:cursor-pointer ${active === '/minigame' ? 'text-yellow-300 underline' : ''}`}>
                    <FaGamepad className="mr-1" />
                    Wordle
                </div>
            </a>
            <a href='/blog'>
                <div id="blog" className={`flex items-center justify-start w-full
                hover:text-green-300 hover:cursor-pointer ${active === '/blog' ? 'text-green-300 underline' : ''}`}>
                    <FaPenRuler className="mr-1" />
                    Blog
                </div>
            </a>
            <div id="socials" className="flex items-center gap-2 justify-start w-full ">
                <a href={socialLinks['github']} target="_blank">
                    <FaGithubAlt className="hover:text-purple-300"/>
                </a>
                <a href={socialLinks['linkedin']} target="_blank">
                    <FaLinkedin className="hover:text-blue-400"/>
                </a>
            </div>
        </div>
    );
}