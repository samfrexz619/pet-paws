// components
import { useState } from "react";
import Modal from "@/components/gallery/Modal";
import NavPath from "@/components/voting/NavPath";



const Gallery = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <section className="w-96% mx-auto py-3">
        <div className="pt-2 pb-4 flex justify-between items-center">
          <NavPath />
          <button onClick={openModal} className="bg-accent-hover h-10 w-[143px] flex items-center rounded-10 text-accent justify-center gap-x-4">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <use xlinkHref="/sprite.svg#upload" />
            </svg>
            <span className="uppercase">upload</span>
          </button>
        </div>
      </section>

      {showModal && <Modal closeModal={openModal} />}
    </>
  );
}

export default Gallery;
