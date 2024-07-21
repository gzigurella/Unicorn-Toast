import useContentModal from "@/components/ContentModal";

export default function ({ title, description, icon, modalBody }) {
    const {open, modal} = useContentModal(title, modalBody)
    return (
        <div
            className={`service-card w-[300px] shadow-xl ${modalBody ? "cursor-pointer" : ""} snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]`}
        >
            {modalBody &&
                <div id={`project-card-${title}`}>
                    {modal}
                </div>
            }
            {modalBody &&
                <div className="group-hover:no-underline group-hover:cursor-pointer" onClick={open}>
                    <div
                        className="text-5xl h-12 w-12 text-gray-800 group-hover:text-gray-400 grayscale group-hover:grayscale-0">
                        {icon ?? icon}
                    </div>
                    <p className="font-bold text-2xl group-hover:text-white text-black/80">
                        {title}
                    </p>
                    <div className="h-20 text-gray-400 text-sm">
                        {description}
                    </div>
                    <p className="text-lg font-bold self-end group-hover:text-white pt-1.5">
                        Read more
                    </p>
                </div>
            }
            {!modalBody &&
                <div>
                    <span
                        className="text-5xl h-12 w-12 text-gray-800 group-hover:text-gray-400 grayscale group-hover:grayscale-0">
                        {icon ?? icon}
                    </span>
                    <p className="font-bold text-2xl group-hover:text-white text-black/80">
                        {title}
                    </p>
                    <div className="text-gray-400 text-sm">
                        {description}
                    </div>
                </div>
            }

        </div>

    );
}