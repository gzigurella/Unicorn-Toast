import Image from "next/image";

const fetchSkill = (skillName) => {
    return <Image src={`/Skills/${skillName}.svg`} alt={skillName}/>
}

const Skills = (skillNames) => {
    return (
        <div className={'flex'}>
            {skillNames.map((skillName) => fetchSkill(skillName))}
        </div>
    );
}

const Description = (desc) => {
    return (<div className={'font-light text-slate-200'}>
        {desc}
    </div>);
}

const modalBody = ({description, skillNames}) => {
    return (
        <div className={'flex flex-col'}>
            <Description desc={description} />
            <Skills skillNames={skillNames} />
        </div>
    );

}

export default modalBody;