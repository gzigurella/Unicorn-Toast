import {FaCoins, FaDatabase, FaEthereum, FaPython} from 'react-icons/fa6';
import ProjectCard from './ProjectCard'
import Image from "next/image";

export default () => {
    return (
        <div id="projects" className='mt-4 ml-[240px] max-w-screen'>
            <div className='font-medium text-gray-600 text-2xl md:text-3xl lg:text-4xl'>Projects</div>
            <div className="flex flex-col md:flex-wrap md:flex-row justify-start mt-4 gap-x-2 gap-y-4">
                <ProjectCard
                    icon={<Image src={"/QuantumXLogo.jpg"} width={70} height={70} alt={"QuantumX Logo"}/>}
                    title={"QuantumX"}
                    description={"Leading the research about Quantum Machine Learning and Financial Quantum Applications"}
                    link={"/case/lambda-tool"}/>
                <ProjectCard
                    icon={<Image src={"/MastercardLogo.svg"} width={70} height={70} alt={"Mastercard Logo"}/>}
                    title={"Mastercard TIP"}
                    description={"Setting up the whole cloud environment of the TIP project from Mastercard on Google Cloud."}
                    />
                <ProjectCard
                    icon={<Image src={"/RegioneSiciliaFlag.svg"} width={70} height={70} alt={"Regione Sicilia Flag"}/>}
                    title={"Regione Sicilia"}
                    description={"IT Consultancy, back-end development and fixes with Java 7. DevOps work to migrate the portal to PSN."}
                />
                <ProjectCard
                    icon={<Image src={"/SenatoItalianoLogo.svg"} width={50} height={50} alt={"Italian Senate Symbol"}/>}
                    title={"Senato"}
                    description={"Back-end development of the portal of the senate of the italian republic, developed with Liferay and Java EE"}
                />
            </div>
            <div className="flex flex-col md:flex-wrap md:flex-row justify-start mt-4 gap-x-2 gap-y-4">
                <ProjectCard
                    icon={<Image src={"/CdPLogo.svg"} width={70} height={70} alt={"Italy Porth Authorities Logo"}/>}
                    title={"Capitanerie"}
                    description={"Leading the back-end development of the italian Port Authorities public portal, developed with Liferay, Java EE and React.js"}
                />
                <ProjectCard icon={<Image src={"/PSNLogo.svg"} width={50} height={50} alt={"PSN Logo"}/>}
                             title={"PSN"}
                             description={"Leading the back-end development of the italian IT Authority portal, developed with Liferay and Java EE"}
                />
                <ProjectCard
                    icon={<Image src={"/RegioneVenetoLogo.jpg"} width={50} height={50} alt={"Regione Veneto Symbol"}/>}
                    title={"Regione Veneto"}
                    description={"Full stack development of the regional portal with Liferay, Java EE and React.js"}/>
                <ProjectCard icon={<Image src={"/AxaLogo.svg"} width={50} height={50} alt={"AXA Logo"}/>}
                             title={"AXA"}
                             description={"Disentangling spaghetti code, a DevOps guide to quality assurance and painful data migrations"}
                             link={"/case/axa-case-study"}/>
            </div>
            <div className="flex flex-col md:flex-wrap md:flex-row justify-start mt-4 gap-x-2 gap-y-4">
                <ProjectCard icon={<Image src={"/PythonLogo.svg"} width={50} height={50} alt={"Python Logo"}/>}
                             title={"Lambda"}
                             description={"The pythonic replacement for GNU AWK, embrace Lambda functions on the CLI"}
                             link={"/case/lambda-tool"}/>
                <ProjectCard icon={<Image src={"/MediolanumLogo.jpeg"} width={50} height={50} alt={"Mediolanum Logo"}/>}
                             title={"Mediolanum"}
                             description={"Migrating Java EE compliant legacy code after 12 years, from Java 6 to 11. "}
                />
                <ProjectCard icon={<Image src={"/BKN301Logo.jpeg"} width={50} height={50} alt={"BKN301 Logo"}/>}
                             title={"BKN301"}
                             description={"Safe transactions across the world, setting up the custom blockchain of BKN301"}
                             link={"/case/fast-blockchain"}/>
                <ProjectCard icon={<Image src={"/SpiaggeLogo.jpg"} width={50} height={50} alt={"Quarkus Logo"}/>}
                             title={"Spiagge.it"}
                             description={"REST service to retrieve data from BigQuery and CyberSec approach against SQLInjection"}
                             link={"/case/lambda-tool"}/>
            </div>
            <div className="flex flex-col md:flex-wrap md:flex-row justify-start mt-4 gap-x-2 gap-y-4">
                <ProjectCard icon={<FaEthereum/>} title={"Azimut/FAST"}
                             description={"Installation of the AllFounds' Fast Blockchain for Azimut. Case study of connecting two Cloud vendors environments."}
                             link={"/case/fast-blockchain"}/>
                <ProjectCard icon={<Image src={"/bigquery.svg"} width={50} height={50} alt={"Google BigQuery Logo"}/>}
                             title={"Azimut/Reports"}
                             description={"Tools for generating financial reports and elaborate billions of rows per second"}
                             link={"/case/lambda-tool"}/>
                <ProjectCard icon={<Image src={"/QuarkusLogo.svg"} width={50} height={50} alt={"Quarkus Logo"}/>}
                             title={"Azimut/NAV Engine"}
                             description={"REST service for financial consultants to keep track of up-to-date NAV values, developed with Quarkus and Liferay"}
                />
                <ProjectCard icon={<Image src={"/dialogflow_cx.svg"} width={50} height={50} alt={"Dialogflow CX Logo"}/>}
                             title={"Azimut/Chatbot"}
                             description={"Intranet integration with Google's Dialogflow CX. A work developed along with Google as partner."}
                />
            </div>
        </div>
    );
}