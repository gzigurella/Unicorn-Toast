'use client';

import React from 'react';
import Image from "next/image";
import Swipeable from 'react-tinder-card';

interface CardProps {
    title: string;
    image: string;
    description?: string;
}

const Card: React.FC<CardProps> = ({ title, image, description}) => {
return (
    <Swipeable className='absolute'>
        <div className='bg-slate-300 rounded-3xl text-slate-500 flex flex-col items-center justify-around
            border-black border-2 relative drop-shadow-2xl w-[80vw] h-[300px] max-w-[260px]'>
            {image && <Image src={image} alt={title} height={150} className='px-4'/>}
            {!image && <div className='text-xl text-bold'>{title}</div>}
            <div className='mx-2'>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    </Swipeable>
    );
};

export type { CardProps };
export { Card };
