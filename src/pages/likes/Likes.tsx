import EmptyState from "@/components/EmptyState";
import NavPath from "@/components/voting/NavPath";
import useGetCatApi from "@/hooks/useGetCatApi";
// import { CatList } from "@/types/cardTypes";

const Likes = () => {
  const { likedImages } = useGetCatApi();
  // const [likes, setLikedImages] = useState<CatList[]>(JSON.parse((localStorage.getItem('liked-images') as string)) || [])

  return (
    <section className="h-[84vh] w-96% mx-auto py-3">
      <div className="pt-2 pb-4">
        <NavPath />
      </div>
      {likedImages.length > 0 ?
        <div className="grid grid-cols-3 gap-4 h-[200px]">
          {likedImages.map(item => (
            <div key={item.id} className="relative h-full">
              <img
                src={item.url}
                alt="cat image"
                className="gridImg rounded-10 h-full"
              />
            </div>
          ))}
        </div>
        : <div>
          <EmptyState />
        </div>
      }

    </section>
  );
}

export default Likes;
