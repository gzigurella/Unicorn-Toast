import Image from 'next/image';
import Logo from '../../public/Logo_2024.png';

export default function ZiguLogo() {

    return (
        <div className="self-start">
            <a className="mr-auto gap-3 flex items-center hover:no-underline hover:text-black" href='/'>
                <Image priority={true} src={Logo} alt={"Site Logo"} width={64}/>
                <span className='text-xl ml-[-20px]'>Gabriele Zigurella</span>
            </a>
        </div>
    );
}