import React from 'react';
import { IMAGES, ImageType } from '@/services/getTechStack';
import Image from 'next/image';

interface PyramidLevelProps {
  pictures: ImageType[];
}

const PictureCard: React.FC<{ picture: ImageType }> = ({ picture }) => (
  <div className={`${picture.inverted ? "grayscale invert hover:grayscale-0 hover:invert-0" : ""} hover:bg-white hover:rounded-lg p-1`}>
    <Image src={picture.url} alt={picture.caption} height={80}/>
  </div>
);

const PyramidLevel: React.FC<PyramidLevelProps> = ({ pictures }) => (
  <div className="flex justify-around items-center gap-x-10 px-6 py-6 border-b-slate-200 border-b-2">
    {pictures.map((picture, index) => (
      <PictureCard key={index} picture={picture} />
    ))}
  </div>
);

interface PyramidProps {
  levels: ImageType[][];
}

function Pyramid({ levels } : PyramidProps) {
  return <div className="">
    {levels.map((level, index) => (
      <PyramidLevel key={index} pictures={level} />
    ))}
  </div>
};

export default Pyramid;
