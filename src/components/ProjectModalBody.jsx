import Image from "next/image";
import {Tooltip} from "react-tooltip";

const fetchSkill = (skillName) => {
    return (
        <div className={'flex flex-col gap-y-0.5 justify-between items-center'}>
            <Tooltip id={skillName} place={"bottom"}/>
            <Image data-tooltip-id={skillName} data-tooltip-content={skillName} key={skillName} src={`/Skills/${skillName}.svg`} alt={skillName} height={40} width={40} />
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
                        Technology Stack involved <span className={'hidden md:block text-xs'}>(hover to show tooltip)</span>
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