import Image from "next/image";

const fetchSkill = (skillName) => {
    return (
        <div className={'flex flex-col gap-y-0.5 justify-between items-center'}>
            <Image key={skillName} src={`/Skills/${skillName}.svg`} alt={skillName} height={40} width={40} />
            {/*TODO: add tooltip with skillName inside!*/}
        </div>
    );
}

const modalBody = ({description, skillNames}) => {
    return (
        <div className={'flex flex-col'}>
            {description &&
                <div className={'font-light text-slate-200'} dangerouslySetInnerHTML={{ __html: description }}>
                </div>
            }
            {skillNames &&
                <div className={'mt-4'}>
                    <div className={'text-sm font-mono text-gray-400 mb-2'}>
                        Skills involved
                    </div>
                    <div className={'flex flex-wrap flex-auto justify-start gap-x-4'}>
                        {skillNames.map((skillName) => fetchSkill(skillName))}
                    </div>
                </div>
            }
        </div>
    );

}

export default modalBody;