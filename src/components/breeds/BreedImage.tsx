import React, { useState } from 'react';
import { Breed } from '@/types/cardTypes';
import { NavLink } from 'react-router-dom';
import useImgUrl from '@/hooks/useImgUrl';

interface Props {
  breedImg: Breed;
  index: number;
  breed: string;
  breedId: string;
}

const BreedImage: React.FC<Props> = (props) => {

  const [hoveredImg, setHoveredImg] = useState<null | string>(null)

  const { breedImg, index, breed, breedId } = props;

  const { imgUrl, handleError } = useImgUrl(breedImg)

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
          <NavLink to={`${breedId}`} className='absolute bottom-6 w-[90%] flex justify-center capitalize rounded-10 h-9 bg-white'>
            <button className='w-full h-full text-accent items-center'>
              {breed.length > 0 ? breed : 'not identified'}
            </button>
          </NavLink>
        </div>
      }
    </div>
  );
}

export default BreedImage;
