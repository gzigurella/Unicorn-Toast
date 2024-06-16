
export default function ({ title, link }) {
    return (
        <a href={link} className="group hover:no-underline hover:cursor-pointer">
            <div className="w-80 md:w-96">
                <div className="h-auto flex-none bg-cover text-left overflow-hidden bg-white rounded-3xl group-hover:drop-shadow-2xl" title={title}>
                    <div className="p-4 justify-between leading-normal">
                        <div className="md:mb-2 md:mt-2">
                            <p className="text-gray-700 text-sm md:text-base font-light group-hover:font-semibold">{title}</p>
                            <div className="font-semibold underline pt-2 lg:hidden">
                                Tap to read more
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}