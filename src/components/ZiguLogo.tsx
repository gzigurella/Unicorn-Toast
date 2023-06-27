import Image from 'next/image';
import '../styles/logo.css';
import Logo from '../../public/logo-web.svg';
import Typewriter from 'typewriter-effect';

export default function ZiguLogo() {
    const words = ['Software Engineer', 'Dinosaur', 
    'Full-Stack Developer', 'Eating cookies', 'DevOps'];
    const companyURL = 'https://nextmind.it';

    return (
        <div className="mx-4 mt-8 flex flex-col items-center justify-start w-full h-1/4">
            <a className="mr-auto flex w-full h-1/2 gap-3" href='/'>
                <Image className='rotating-image' priority={true} src={Logo} alt={"Site Logo"} width={32}/>
                <div className="md:text-4xl text-2xl font-bold text-center text-slate-200">Gabriele Zigurella</div>
            </a>
            <div className="mr-auto ml-8 md:ml-12 mt-1 flex text-md font-bold text-center text-purple-300">                
                <Typewriter options={{
                        strings: words,
                        autoStart: true,
                        loop: true,
                }}/>
                <span className='text-slate-50'>@</span>
                <a href={companyURL} target='_blank'><span className='underline text-slate-50 hover:text-cyan-300'>Nextmind</span></a>
            </div>
        </div>
    );
}