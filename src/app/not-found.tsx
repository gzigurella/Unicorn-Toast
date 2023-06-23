import Link from 'next/link'
import Image from 'next/image' 
import ErrorImage from '../../public/404.png'
import {FaHouseChimney} from 'react-icons/fa6'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center min-w-screen min-h-screen text-slate-100 mt-10'>
        <div className='flex gap-6'>
            <div className='text-2xl font-semibold'>Could not find requested resource</div>
            <Link href="/">
                <div className='hover:cursor-pointer border-slate-100 rounded-lg bg-purple-200 text-black py-2 px-4 border-s-2 flex items-center gap-1'>
                    <FaHouseChimney/> Take me back
                </div>
            </Link>
        </div>
        <Image src={ErrorImage} alt="404" width={800} height={800}/>
    </div>
  )
}