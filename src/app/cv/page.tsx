'use client';

import Header from "@/components/cv/CVHeader";
import Loading from "../loading";
import { Suspense } from "react";
import Section from "@/components/cv/CVSection";
import { getEducation, getExperience, getWorkExperience } from "@/services/cv.service";

const Page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className="min-h-screen min-w-screen mx-10 rs-theme-dark">
                <Header />
                <Section title="Work Experience" timeline={getWorkExperience()} />
                <Section title="Education" timeline={getEducation()} />
                <Section title="Extra Activities" timeline={getExperience()} />
                //TODO: Skill section as footer
            </div>
        </Suspense>
    );
}

export default Page;