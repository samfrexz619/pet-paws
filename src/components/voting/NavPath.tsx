import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";


interface Props {

}

const NavPath: React.FC<Props> = (props) => {
  const { pathname } = useLocation();

  const navigate = useNavigate()

  return (
    <div className='flex gap-x-2 items-center'>
      <button onClick={() => navigate(-1)} className='h-10 w-10 rounded-10 bg-accent-hover dark:bg-accent/20 text-accent flex items-center justify-center'>
        <svg width="7" height="12" viewBox="0 0 7 12">
          <use xlinkHref="/sprite.svg#prev" />
        </svg>
      </button>
      <div className='w-[130px] rounded-10 bg-accent text-white h-10 flex items-center justify-center'>
        <p className="uppercase">{pathname.slice(1)}</p>
      </div>
    </div>
  );
}

export default NavPath;
