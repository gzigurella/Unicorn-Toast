import { FaDownload } from 'react-icons/fa6';

const CVButton = ({link}) => {
    return (<a href={link} target={"_blank"} rel={"noopener noreferrer"}>
        <button
            className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-md font-bold cursor-pointer relative z-10 group"
        >
            Summary CV
            <span
                className={`absolute w-36 h-32 -top-8 -left-2 bg-purple-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right`}
            ></span>
            <span
                className={`absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right`}
            ></span>
            <span
                className={`absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right`}
            ></span>
            <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-[0.5rem] z-10"
            >
                <span className={"flex items-center gap-x-1"}><FaDownload size={16}/>Download</span>
            </span>
        </button>
    </a>)
}

export default function () {
    return (
        <div id="about" className='mt-10 mx-[240px]'>
            <div className={'font-semibold text-3xl md:text-5xl lg:text-7xl'}>
                <div>I'm <span className={'text-purple-400'}>Gabriele Zigurella</span></div>
                <div>DevOps & Software Engineer</div>
            </div>
            <div id="about-paragraph" className='flex gap-x-4 items-center mt-4'>
                <div className='font-medium text-3xl md:text-4xl lg:text-5xl'>
                    Am I a good fit for your <span className="text-purple-400">work</span>?
                </div>
                <CVButton link={"/zigurella_gabriele_cv.pdf"}/>
            </div>
        </div>
    );
}