import { FaEthereum, FaPython, FaSpaghettiMonsterFlying } from 'react-icons/fa6';
import ProjectCard from './ProjectCard'

export default () => {
    return (
    <div id="projects" className='mt-24 md:mt-10 self-start'>
        <div className='ml-2 lg:ml-20'>
          <div className='font-semibold text-3xl md:text-5xl lg:text-7xl'>Projects & Hobbies</div>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-nowrap justify-around w-screen mt-4 lg:px-20 gap-x-8 gap-y-8">
          <ProjectCard icon={<FaSpaghettiMonsterFlying />} title={"Work Horror Stories"} description={"Disentangling spaghetti code and making a safer space, a DevOps experience!"} link={"/case/qa-case-study"} />
          <ProjectCard icon={<FaEthereum />} title={"FAST"} description={"The interstellar guide on how Blockchains won't solve stakeholders problem!"} link={"/case/fast-blockchain"} />
          <ProjectCard icon={<FaPython />} title={"Lambda"} description={"The pythonic toy replacement for GNU AWK"} link={"/case/lambda-tool"} />
        </div>
    </div>
    );
}