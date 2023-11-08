'use client';

import Header from "@/components/cv/CVHeader";
import Loading from "../loading";
import AstronautImage from '../../../public/Houston.png'
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import Section from "@/components/cv/CVSection";
import { getEducation, getExperience, getWorkExperience } from "@/services/cv.service";
import Footer from "@/components/cv/CVFooter";
import { usePDF } from 'react-to-pdf';
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";

const Page = () => {
    const [isLoading, setIsLoading] = useState(true);
    const size = useWindowSize();
    const today = new Date();
    const todayStr = today.toISOString().substring(0, 10);
    const filename = `gabriele_zigurella_cv_${todayStr}.pdf`;
    const [downloadButtonIsPressed , setDownloadButtonIsPressed] = useState(false);

    const { toPDF, targetRef } = usePDF({filename: filename});

    useEffect(() => {
        if(downloadButtonIsPressed){
            toPDF();
        }
    }, [downloadButtonIsPressed]);

    useLayoutEffect(() => {
        setIsLoading(false);
    }, []);


    return (
        <>
            {isLoading && <Loading />}
            { size.width  && <Suspense fallback={<Loading />}>
                {
                    size.width < 980 ?  
        
                        <div className="min-h-screen min-w-screen mx-10 mt-6 mb-10 rs-theme-dark">
                            <div className="text-center text-white my-4">
                                <p className="text-2xl font-bold"><span className="font-extrabold">Houston</span> . . . we got a problem</p>
                                <p className="text-lg font-semibold">Seems like your device screen size is too little, please visit this page from another device.</p>
                            </div>
                            <div className="flex flex-1 justify-center opacity-60">
                                <Image src={AstronautImage} alt="Houston, we got a problem" width={400} height={400}/>
                            </div>
                        </div>
        
                    :
        
                        <div id="cv" ref={downloadButtonIsPressed ? targetRef : null} className="min-h-screen min-w-screen mx-10 mt-6 mb-10 rs-theme-dark">
                            <div className="text-center text-md text-slate-500 my-4">
                                <p>I authorize the processing of my personal data pursuant to Legislative Decree 101/2018 and art. 13 GDPR (EU Regulation 2016/679) for the purposes of personnel research and selection</p>
                            </div>
                            <Header refDownloadCallback={() => setDownloadButtonIsPressed(true)}/>
                            <Section title="Work Experience" timeline={getWorkExperience()} />
                            <Section title="Education" timeline={getEducation()} />
                            <Section title="Extra Activities" timeline={getExperience()} />
                            <Footer />
                        </div>
                }
                </Suspense>
            }
        </>
    );
}

export default Page;