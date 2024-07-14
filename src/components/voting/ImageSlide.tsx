import React from 'react';
import { CatList } from '@/types/cardTypes';



interface Props {
  catList: CatList;
  index: number;
  currentSlide: number;
}

const ImageSlide: React.FC<Props> = (props) => {
  const { catList, index, currentSlide } = props;

  return (
    <div className={`${currentSlide === index ? 'block' : 'hidden'} h-full w-full`}>
      <img
        src={catList.url}
        alt="cat images with different breed"
        className="gridImg w-full rounded-20 transition-transform ease-out duration-700"
      />
    </div>
  );
}

export default ImageSlide;
