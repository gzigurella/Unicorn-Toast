import { Progress } from "rsuite";

const Footer = () => {
    return (
        <div className="header md:flex items-center justify-center gap-x-14 hidden bg-orange-500 rounded-b-3xl mx-10 pt-10 pb-10 px-10">
            <div className="self-start section-Skill-title w-1/4">
                <h1 className="header-name text-3xl font-medium underline decoration-sky-500 text-white">Skills</h1>
            </div>
            <div id="skills-set-1" className="flex flex-col w-1/4">
                <Skill title="Java" percent={100} />
                <Skill title="Java EE" percent={77} />
                <Skill title="Spring" percent={60} />
                <Skill title="Spring Boot" percent={74} />
                <Skill title="Quarkus" percent={90} />
            </div>
            <div id="skills-set-2" className="flex flex-col w-1/4">
                <Skill title="React.js" percent={50} />
                <Skill title="Next.js" percent={80} />
                <Skill title="CSS" percent={43} />
                <Skill title="Liferay 7.X" percent={96} />
                <Skill title="Liferay 6.X" percent={53} />
            </div>
            <div id="skills-set-3" className="flex flex-col w-1/4">
                <Skill title="Google Cloud Platform" percent={67} />
                <Skill title="AWS" percent={42} />
                <Skill title="Jenkins" percent={91} />
                <Skill title="Git" percent={100} />
                <Skill title="Unix" percent={100} />
            </div>
        </div>
    );
}

interface SkillProps {
    title: string;
    percent: number;
}

const Skill = (props: SkillProps) => {
    return (
        <div className="skill">
            <div className="skill-title text-white font-semibold">{props.title}</div>
            <Progress.Line percent={props.percent} showInfo={false} />
        </div>
    );
}

export default Footer;