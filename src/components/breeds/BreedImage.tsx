import React, { useState } from 'react';
import { Breed } from '@/types/cardTypes';

interface Props {
  breedImg: Breed;
  index: number;
  breed: string;
  breedId: string;
}

const URL = 'https://cdn2.thecatapi.com/images'

const BreedImage: React.FC<Props> = (props) => {

  const [hoveredImg, setHoveredImg] = useState<null | string>(null)

  const { breedImg, index, breed, breedId } = props;

  const [imgUrl, setImgUrl] = useState(`${URL}/${breedImg.reference_image_id}.jpg`);

  const handleError = () => {
    if (imgUrl.endsWith('.jpg')) {
      setImgUrl(`${URL}/${breedImg.reference_image_id}.png`);
    }
  };

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => setHoveredImg(breedId)}
      onMouseLeave={() => setHoveredImg(null)}
    >
      <img
        src={imgUrl}
        alt="cat breed images"
        className='gridImg rounded-10 w-full h-[250px]'
        // style={{ height: `${Math.random() * (400 - 200) + 200}px` }}
        onError={handleError}
      />
      {hoveredImg &&
        <div className='absolute top-0 w-full h-[250px] flex justify-center rounded-10 bg-accent/60'>
          <button className='bg-white text-accent h-9 items-center flex justify-center capitalize absolute bottom-6 w-[90%] rounded-10'>
            {breed.length > 0 ? breed : 'not identified'}
          </button>
        </div>
      }
    </div>
  );
}

export default BreedImage;
