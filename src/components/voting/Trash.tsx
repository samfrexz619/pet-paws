import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import useGetCatApi from "@/hooks/useGetCatApi";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import NavPath from "@/components/voting/NavPath";
import ImageSlide from "@/components/voting/ImageSlide";
import ReactionBtns from "@/components/voting/ReactionBtns";
import ReactionLog from "@/components/voting/ReactionLog";


const Trash = () => {
  const { catLists, loading } = useGetCatApi()

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const reactionBtns = [
    {
      id: '1',
      icon: 'like',
    },
    {
      id: '2',
      icon: 'favorite',
    },
    {
      id: '3',
      icon: 'sad',
    },
  ]

  return (
    <section className="w-[96%] mx-auto py-3">
      <div className="pt-2 pb-4">
        <NavPath />
      </div>
      {/* cat-image slider */}
      <div className="w-full">
        {
          loading
            ? <span>loading...</span>
            : (<Carousel
              className="h-[167px] md:h-[360px] w-full relative"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="h-full">
                {catLists.map(cat => (
                  <ImageSlide key={cat.id} catList={cat} />
                ))}
              </CarouselContent>
              <div className="w-[140px] md:w-[200px] left-[28%] md:left-[35%] justify-center bg-white gap-x-1 flex rounded-10 border-4 border-white absolute -bottom-[3.5rem] md:-bottom-8">
                {reactionBtns.map(btn => (
                  <ReactionBtns key={btn.id} reaction={btn} />
                ))}
              </div>
            </Carousel>)
        }
      </div>

      {/* reaction logs */}
      <div className="w-full lg:mt-14 mt-20">
        <ReactionLog />
      </div>
    </section>
  );
}

export default Trash;
