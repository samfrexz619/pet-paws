// import { useState } from "react";
// import { useEffect } from "react";
import useGetCatApi from "@/hooks/useGetCatApi";
import NavPath from "@/components/voting/NavPath";
import ImageSlide from "@/components/voting/ImageSlide";
import ReactionBtns from "@/components/voting/ReactionBtns";
import ReactionLog from "@/components/voting/ReactionLog";
import { Skeleton } from "@/components/ui/skeleton";



const Voting = () => {

  const { catLists, loading, dispatch, currentIndex, likedImages, favoriteImages, dislikedImages } = useGetCatApi()

  const handleNext = () => {
    return dispatch({ type: 'NEXT_SLIDE', payload: catLists.length })
    // setCurrSlide(prevIndex => prevIndex === catLists.length - 1 ? 0 : prevIndex + 1)
  }

  const addLikedItems = (action: string) => {
    switch (action) {
      case 'like':
        dispatch({ type: 'SET_LIKED_IMAGES', payload: currentIndex })
        localStorage.setItem('liked-images', JSON.stringify(likedImages))
        break;
      case 'favorite':
        dispatch({ type: 'SET_FAVORITE_IMAGES', payload: currentIndex })
        break;
      case 'sad':
        dispatch({ type: 'SET_DISLIKED_IMAGES', payload: currentIndex })
        break;
      default:
        break;
    }
    handleNext()
  }

  // useEffect(() => {
  //   localStorage.setItem('liked-images', JSON.stringify(likedImages))
  // }, [likedImages])

  return (
    <section className="w-96% mx-auto py-3">
      <div className="pt-2 pb-4">
        <NavPath />
      </div>

      {/* cat-image slider */}
      <div className="w-full">
        {loading
          ? <Skeleton className="h-[180px] md:h-[370px] rounded-20 bg-grey" />
          : (<div className="w-full h-[180px] md:h-[370px] relative">
            {catLists?.map((item, idx) => (
              <div key={item.id}>
                <ImageSlide catList={item} index={idx} currentSlide={currentIndex} />
                <div className="w-[140px] md:w-[200px] left-[27%] md:left-[35%] justify-center bg-white gap-x-1 flex rounded-10 border-4 border-white absolute -bottom-[3.5rem] md:-bottom-6">
                  <ReactionBtns addLikedItems={addLikedItems} />
                </div>
              </div>
            ))}
          </div>
          )
        }
      </div>
      {/* reaction logs */}
      <div className="w-full lg:mt-14 mt-14 max-h-[15vh] overflow-y-scroll">
        {likedImages.map(item => (
          <ReactionLog key={item.id} icon='like' imageId={item.id} />
        ))}
        {favoriteImages.map(item => (
          <ReactionLog key={item.id} icon='favorite' imageId={item.id} />
        ))}
        {dislikedImages.map(item => (
          <ReactionLog key={item.id} icon='dislike' imageId={item.id} />
        ))}
      </div>

    </section>
  );
}

export default Voting;
