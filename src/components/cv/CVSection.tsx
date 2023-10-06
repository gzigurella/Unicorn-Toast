'use client';

import { Timeline } from "rsuite";

interface ItemInterface {
    title: string;
    subtitle: string;
    date: string;
    description: string;
}

interface SectionProps {
    title: string;
    timeline: ItemInterface[];
}

const Section = ({title, timeline} : SectionProps) => {
    return (
        <div className="header md:flex items-center justify-center gap-x-14 hidden bg-slate-100 mx-10 px-10 py-4">
            <div className={`self-start section-${title}-title w-1/4`}>
                <h1 className="header-name text-3xl font-medium underline decoration-pink-500">{title}</h1>
            </div>
            <div className={`section-${title}-timeline flex-1 rs-theme-dark`}>
                <Timeline isItemActive={Timeline.ACTIVE_FIRST}>
                    {timeline.map((item:ItemProps, index:number) => {
                        return <Item title={item.title} subtitle={item.subtitle} date={item.date} description={item.description} />
                    })}
                </Timeline>
            </div>
        </div>
    );
}

interface ItemProps extends ItemInterface{
    children?: React.ReactNode;
}

const Item = ({title, subtitle, date, description, children} :ItemProps) => {
    return (
        <Timeline.Item time={date}>
            <div>
                <p className="text-base"><span className="italic">{subtitle}</span><span className=""> at </span>{title}</p>
                <div className="text-sm mt-1">{description}</div>
                {children}
            </div>
        </Timeline.Item>
    );
}

export default Section;