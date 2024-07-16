import React from 'react';


interface Props {
  closeModal: () => void;
}

const Modal: React.FC<Props> = (props) => {

  const { closeModal } = props;

  return (
    <div onClick={closeModal} className='fixed top-0 bottom-0 left-0 w-full bg-pry-dark/60 flex items-center justify-end pr-5 transition-all duration-500'>
      <div onClick={e => e.stopPropagation()} className="relative rounded-20 w-full md:w-[680px] h-full md:h-[97vh] bg-grey-pry dark:bg-[#282828]">

        <div className="mx-auto w-[95%] py-7">
          {/* close modal btn */}
          <div className='w-full flex justify-end'>
            <button onClick={closeModal} className='w-12 h-12 rounded-10 bg-white dark:bg-white/5 text-accent flex items-center justify-center'>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <use xlinkHref="/sprite.svg#close" />
              </svg>
            </button>
          </div>

          {/* modal contents */}
          <div className='w-full text-center'>
            <h3 className='text-pry-dark dark:text-white text-xl md:text-4xl font-medium'>Upload a .jpg or .png Cat Image</h3>
            <p className='text-grey text-xl py-4 font-normal'>Any uploads must comply with the <a href="https://thecatapi.com/privacy" className='text-accent'>upload guidelines</a> or face deletion.</p>
          </div>

          {/* file upload */}
          <div className='w-full mt-5 border-2 border-dashed rounded-20 h-[180px] md:h-[320px] border-accent-hover dark:border-accent/20 bg-white dark:bg-white/5'>
            <div className="h-full flex items-center justify-center bg-[url('@/assets/images/loader.png')] bg-30% dark:bg-[url('@/assets/images/dark-loader.png')] bg-no-repeat bg-center">
            </div>
          </div>

          <p className='w-full text-center text-grey py-2'>
            No file selected
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
