import { FaGithub } from 'react-icons/fa6'

export default function () {
    return (
        <div className="mt-20 pb-32 h-24 w-full border-t-[1px] border-gray-400">
            <div className="flex flex-row justify-between mx-20 mt-8">
                <div className='text-md'>
                    <div>Personal Website made with Next.js</div>
                    <div className='flex gap-x-2 mt-1'>
                        <FaGithub size={20} /> <span>Souce code available <a href="https://github.com/gzigurella/Unicorn-Toast">here</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}