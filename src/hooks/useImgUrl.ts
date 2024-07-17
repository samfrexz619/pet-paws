import { useState } from 'react';
import { Breed } from '@/types/cardTypes';


const URL = 'https://cdn2.thecatapi.com/images';

const useImgUrl = (item: Breed) => {
  const [imgUrl, setImgUrl] = useState(`${URL}/${item?.reference_image_id}.jpg`)

  const handleError = () => {
    if (imgUrl?.endsWith('.jpg')) {
      setImgUrl(`${URL}/${item?.reference_image_id}.png`);
    }
  }

  return {
    imgUrl,
    handleError
  }
}

export default useImgUrl;
