import Image from "next/image";

interface CardProps {
    title: string;
    image: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
return (
    <div>
        <div className="text-lg">{title}</div>
        <Image src={image} alt={title}/>
        <div>
            {description}
        </div>
    </div>
    );
};

export type { CardProps };
export { Card };
