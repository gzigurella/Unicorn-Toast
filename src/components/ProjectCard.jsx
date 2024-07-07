export default function ({ title, description, link, icon }) {
    return (
        <div
            className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]"
        >
            <a href={link} className="group-hover:no-underline group-hover:cursor-pointer">
                <span className="text-5xl h-12 w-12 text-gray-800 group-hover:text-gray-400">
                    {icon ?? icon}
                </span>
                <p className="font-bold text-2xl group-hover:text-white text-black/80">
                    {title}
                </p>
                <p className="text-gray-400 text-sm">
                    {description}
                </p>
                <p
                    style={{ "WebkitTextStroke": "1px gray", "WebkitTextFillColor": "transparent" }}
                    className="text-2xl font-bold self-end"
                >
                    Read more
                </p>
            </a>
        </div>

    );
}