import React, { useState } from 'react';
import { Breed } from '@/types/cardTypes';

interface Props {
  breedImg: Breed;
}

const URL = 'https://cdn2.thecatapi.com/images'

const BreedImage: React.FC<Props> = (props) => {

  const { breedImg } = props;

  const [imgUrl, setImgUrl] = useState(`${URL}/${breedImg.reference_image_id}.jpg`);

  const handleError = () => {
    if (imgUrl.endsWith('.jpg')) {
      setImgUrl(`${URL}/${breedImg.reference_image_id}.png`);
    }
  };

  return (
    <img src={imgUrl} alt="cat breed images" className='' onError={handleError} />
  );
}

export default BreedImage;
