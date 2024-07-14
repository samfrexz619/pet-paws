import React from 'react';
import { NavLink, useLocation } from "react-router-dom";


interface Props {
  variant: string;
  imgPath: string;
  alt: string;
  path: string;
}

const CardLink: React.FC<Props> = (props) => {

  const { variant, imgPath, alt, path } = props;

  const { pathname } = useLocation()

  const imgSrc = new URL(`../../assets/images/${imgPath}.png`, import.meta.url).href

  return (
    <div className='md:w-[138px] w-full rounded-20'>
      <NavLink
        to={path}
        className={`
          ${variant === 'voting'
            ? 'bg-vote'
            : variant === 'breeds'
              ? 'bg-breed'
              : 'bg-gallery'
          }
          rounded-20 border-4 border-white/60 w-full h-[198px] md:flex items-center justify-center mb-5 hidden`
        }
      >
        <img src={imgSrc} alt={alt} />
      </NavLink>
      <NavLink to={path} className={`${pathname === path ? 'bg-accent text-white' : 'bg-white text-accent dark:bg-white/10'} uppercase flex items-center justify-center w-full py-3 my-2 md:my-0 mx-auto h-9 rounded-10 hover:bg-accent-hover`}>
        {variant}
      </NavLink>
    </div>
  );
}

export default CardLink;
