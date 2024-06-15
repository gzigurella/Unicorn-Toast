import Image from 'next/image';
import Logo from '../../public/Logo_2024.png';

export default function ZiguLogo() {

    return (
        <div className="self-start">
            <a className="mr-auto gap-3" href='/'>
                <Image priority={true} src={Logo} alt={"Site Logo"} width={64}/>
            </a>
        </div>
    );
}