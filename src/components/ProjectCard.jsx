
export default function ({ title, link }) {
    return (
        <a href={link} className="group hover:no-underline hover:cursor-pointer">
            <div className="w-96">
                <div className="h-48 lg:h-auto flex-none bg-cover text-left overflow-hidden bg-white rounded-3xl group-hover:drop-shadow-2xl" title={title}>
                    <div className="p-4 justify-between leading-normal">
                        <div className="mb-2 mt-2">
                            <p className="text-gray-700 text-base font-light group-hover:font-semibold">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}