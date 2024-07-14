import { FaJava } from "react-icons/fa6";

export default function Page() {
    return (<div className="flex flex-col items-center content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
        <div className="text-4xl font-semibold">
        Real Case Study
            </div>
            <div className='flex flex-col gap-y-6 w-3/4 ml-2 mt-2'>
            <div>
                <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                    <FaJava/> Migrating software to newer versions: a Liferay experience
                </div>
                <div className='text-base font-light'>
                    <div className="text-gray-400 text-lg">Background</div>
                    <div>
                        <p>The client wanted to migrate between two major release of the software release, this meant that the following procedures where needed:</p>
                        <ul className="ml-4 mt-1">
                            <li>1. Migrate the database</li>
                            <li>2. Migrate the portal modules</li>
                            <li>2. Migrate from Java EE to Jakarta EE</li>
                        </ul>
                    </div>
                    <div className="text-gray-400 text-lg mt-8">Hidden Requirements</div>
                    <div>
                        Migrating over 212 modules, each between 6k-10k lines of code is not an easy task, much less if all the code is a mix of spaghetti code scaffolded on top of each other through time!<br/>
                        Therefore we needed another small tool from my DevOps toolbox: Sonarqube!<br/> 
                        There was just a small amount of debt due to their way of developing with "Agile" (or what they have the courage to call so), around 470 days of technical debt. I mean ... what could go wrong, right?
                    </div>
                    <div className="text-gray-400 text-lg mt-8">Conclusion</div>
                    <div>
                        We ended up pretty much rewriting everything, most of the things by leveraging new core-modules of the new version of the portal (Liferay) they were migrating to.
                        Some things were so badly tangled up that was pretty much impossible to recover without a complete rewrite, so remember this: <span className="font-semibold">When you force developers to work always in a hurry you may not see the cost at first, but you will, sooner or later :-)</span>
                    </div>
                </div>
            </div>
            </div> 
    </div>);
}