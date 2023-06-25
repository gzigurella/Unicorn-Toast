import { Suspense } from 'react';
import Loading from '../loading';
import Pyramid from '@/components/PyramidStack';
import { IMAGES, ImageType } from '@/services/getTechStack';

export default function Page() {
    const levels: ImageType[][] = IMAGES;

    return (
        <div className='flex items-center justify-center min-h-screen min-w-screen mx-10'>
            <Suspense fallback={<Loading />}>
                <div className='md:flex items-center justify-center gap-x-6 hidden'>
                    <div className='flex flex-col items-center justify-center w-3/5'>
                        <Pyramid levels={levels} />;
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6 w-2/5'>
                        <div className='text-slate-200 text-md h-[100px] py-6'>
                            I usually work with React.js and TypeScript at the top level, 
                            although I may happen to use alternatives such as Preact and Inferno.
                        </div>
                        <div className='text-slate-200 text-md h-[100px] py-6'>
                            The portals I create make the best use of Next.js and Liferay for server-intensive applications.
                        </div>
                        <div className='text-slate-200 text-md h-[100px] py-6'>
                            For the backend I focus on REST and Reactive APIs, using Quarkus - with Java and Scala - to develop native solutions 
                            that allows me to have a lightning fast solution at a fair price.
                        </div>
                        <div className='text-slate-200 text-md h-[100px] py-6'>
                            When automation comes into play, I use Python and Bash to create scripts that can be used to speed up the development process.
                            I often use Groovy as well to create build pipelines for the backend and frontend.
                        </div>
                        <div className='text-slate-200 text-md h-[100px] py-6'>
                            At the bottom of the iceberg I use Docker and AWS for my personal projects, while I usually end up working with OpenShift and Google Cloud 
                            on a daily basis at work.
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-6 w-full md:hidden'>
                    <div className='text-slate-200 text-md'>
                        Please visit this page on a desktop browser to read mode of my tech stack.
                        <Pyramid levels={levels} />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}