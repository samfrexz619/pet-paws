import React, { useRef, useState } from 'react';


interface Props {
  closeModal: () => void;
}

const Modal: React.FC<Props> = (props) => {

  const { closeModal } = props;

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [imgFile, setImgFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState('')

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        setImgFile(selectedFile)
        setFileName(selectedFile.name)
      }
    }
  }

  const handleFileDelete = () => {
    setImgFile(null)
    setFileName('')
  }

  return (
    <div onClick={closeModal} className='fixed top-0 bottom-0 left-0 w-full bg-pry-dark/60 flex items-center justify-center md:justify-end pr-5 transition-all duration-500'>
      <div onClick={e => e.stopPropagation()} className="relative transition-all md:rounded-20 w-full md:w-[680px] h-full md:h-[97vh] bg-grey-pry dark:bg-[#282828]">

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
            <p className='text-grey text-xl py-4 font-normal'>Any uploads must comply with the <a href="https://thecatapi.com/privacy" target='_blank' className='text-accent'>upload guidelines</a> or face deletion.</p>
          </div>

          {/* file upload */}
          <div className='w-full mt-5 border-2 border-dashed rounded-20 h-[180px] md:h-[320px] border-accent-hover dark:border-accent/20 bg-white dark:bg-white/5'>
            <div className="h-full flex items-center justify-center bg-[url('@/assets/images/loader.png')] bg-30% dark:bg-[url('@/assets/images/dark-loader.png')] bg-no-repeat bg-center">
              <input
                ref={fileInputRef}
                type="file"
                accept='image/png, image/jpeg'
                hidden
                className='hidden'
                onChange={handleFileChange}
              />

              {imgFile
                ? <img src={URL.createObjectURL(imgFile)} className='h-[150px] md:h-[295px] w-[85%] mx-auto gridImg' />
                : <button className='' onClick={handleFileClick}>
                  Click here to upload
                </button>
              }
            </div>
          </div>

          <div className='w-full py-2 flex'>
            <p className='w-full text-14 text-center text-grey py-2'>
              {fileName === '' ? 'No file selected' : `Image File Name: ${fileName}`}
            </p>
            {imgFile && <button onClick={handleFileDelete} className='text-accent'>
              <svg width="20" height="20">
                <use xlinkHref="/sprite.svg#error-close" />
              </svg>
            </button>}
          </div>

          {imgFile &&
            <button className='mt-3 mx-auto w-[172px] h-10 rounded-10 bg-accent text-white uppercase font-medium text-xs flex items-center justify-center'>
              upload photo
            </button>
          }

        </div>
      </div>
    </div>
  );
}

export default Modal;
