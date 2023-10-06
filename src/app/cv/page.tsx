'use client';

import Header from "@/components/cv/CVHeader";
import Loading from "../loading";
import { Suspense, useEffect, useState } from "react";
import Section from "@/components/cv/CVSection";
import { getEducation, getExperience, getWorkExperience } from "@/services/cv.service";
import Footer from "@/components/cv/CVFooter";
import { usePDF } from 'react-to-pdf';

const Page = () => {
    const today = new Date();
    const todayStr = today.toISOString().substring(0, 10);
    const filename = `gabriele_zigurella_cv_${todayStr}.pdf`;
    const [downloadButtonIsPressed , setDownloadButtonIsPressed] = useState(false);

    useEffect(() => {
        if(downloadButtonIsPressed){
            toPDF();
        }
    }, [downloadButtonIsPressed]);

    const { toPDF, targetRef } = usePDF({filename: filename});
    return (
        <Suspense fallback={<Loading />}>
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
        </Suspense>
    );
}

export default Page;