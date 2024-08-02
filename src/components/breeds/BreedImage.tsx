import React, { useState, memo } from 'react';
import { Breed } from '@/types/cardTypes';
import { NavLink } from 'react-router-dom';
import useImgUrl from '@/hooks/useImgUrl';

interface Props {
  breedImg: Breed;
  index: number;
}

const BreedImage: React.FC<Props> = (props) => {

  const [hoveredImg, setHoveredImg] = useState<null | string>(null)

  const { breedImg, index } = props;

  const { imgUrl, handleError } = useImgUrl(breedImg)

  return (
    <div
      className={`w-full relative ${index === 0 ? 'col-span-2' : 'col-span-1'}`}
      onMouseEnter={() => setHoveredImg(breedImg.id)}
      onMouseLeave={() => setHoveredImg(null)}
    >
      <img
        src={imgUrl}
        alt="cat breed images"
        className='gridImg rounded-10 w-full h-[250px]'
        onError={handleError}
      />
      {hoveredImg &&
        <div className='absolute top-0 w-full h-[250px] flex justify-center rounded-10 bg-accent/60'>
          <NavLink to={`breed-detail/${breedImg.id}`} className='absolute bottom-6 w-[90%] flex justify-center capitalize rounded-10 h-9 bg-white'>
            <button className='w-full h-full text-accent items-center'>
              {breedImg.name.length > 0 ? breedImg.name : 'not identified'}
            </button>
          </NavLink>
        </div>
      }
    </div>
  );
}

export default memo(BreedImage);
