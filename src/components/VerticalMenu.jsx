import {FaHome} from "react-icons/fa";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa6";

export default function VerticalMenu({}) {
    return (
        <div
            className={"flex flex-col bg-white items-center justify-around gap-y-4 px-2 py-2 rounded-md text-2xl drop-shadow-lg"}>
            <a href={"/"}
               className={"hover:cursor-pointer hover:text-purple-400 group relative"}
            >
                <FaHome/>
                <div
                    className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
                >
                    <span className="text-zinc-400 whitespace-nowrap text-sm">Home</span>
                    <div
                        className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
                    ></div>
                </div>
            </a>
            <a href={"mailto:gabriele.zigurella@pec.it"}
               className={"hover:cursor-pointer hover:text-red-500 group relative"}
            >
                <FaEnvelope/>
                <div
                    className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
                >
                    <span className="text-zinc-400 whitespace-nowrap text-sm">Contact me</span>
                    <div
                        className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
                    ></div>
                </div>
            </a>
            <a href={"https://www.linkedin.com/in/gabrielezigurella?trk=public_profile_browsemap"} target={"_blank"}
               className={"hover:cursor-pointer hover:text-blue-500 group relative"}
            >
                <FaLinkedin/>
                <div
                    className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
                >
                    <span className="text-zinc-400 whitespace-nowrap text-sm">LinkedIn Profile</span>
                    <div
                        className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
                    ></div>
                </div>
            </a>

            <a href={"https://github.com/gzigurella"} target={"_blank"}
               className={"hover:cursor-pointer hover:text-gray-500 group relative"}>
                <FaGithub/>
                <div
                    className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
                >
                    <span className="text-zinc-400 whitespace-nowrap text-sm">GitHub Profile</span>
                    <div
                        className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
                    ></div>
                </div>
            </a>
        </div>
    );
}