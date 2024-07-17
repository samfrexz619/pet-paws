import { useParams } from 'react-router-dom';
import NavPath from '@/components/voting/NavPath';
import { useGetBreeds } from '@/hooks/useGetBreeds';
import useImgUrl from '@/hooks/useImgUrl';


const BreedDetail = () => {

  const { id } = useParams();
  const { breeds } = useGetBreeds()

  const breedItem = breeds.find(breed => breed.id === id)

  const { imgUrl, handleError } = useImgUrl(breedItem!)

  // useEffect(() => {
  //   imgUrl
  // }, [id])

  if (!breedItem) {
    return <div>Image not found</div>;
  }

  return (
    <section className="w-96% mx-auto py-3">
      <div className='pt-2 flex gap-x-3'>
        <NavPath />
        <div className='h-10 w-10 rounded-10 bg-accent dark:bg-accent/20 text-white flex items-center justify-center'></div>
      </div>

      <section className='w-full mt-5 reset'>
        <div className="w-full h-[180px] rounded-20 bg-grey md:h-[360px] relative">
          <img
            src={imgUrl}
            alt="cat breed image"
            className='gridImg rounded-20 w-full h-full'
            onError={handleError}
          />
        </div>

        <div className="w-full border-2 mt-12 h-[370px] md:h-[294px] relative border-accent-hover dark:border-accent/20 rounded-20">

          <div className="left-1/2 absolute -top-[25px] flex items-center">
            <p className='text-3xl h-[62px] text-center dark:bg-[#292929] bg-white w-[193px] relative -left-1/2 font-medium pt-2'>
              {breedItem!?.name.length > 10 ? `${breedItem?.name.slice(0, 10)}...` : breedItem?.name}
            </p>
          </div>

          <div className='pt-10 pb-4 w-[85%] md:w-[80%] mx-auto'>
            <p className='text-xl pb-5 text-center font-medium text-grey'>Family companion cat</p>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10'>
              <div className=''>
                <p className='font-medium text-pry-dark dark:text-white'>Temperament: </p>
                <span className='text-grey'>{breedItem?.temperament}</span>
              </div>
              <div className=''>
                <p className='font-medium text-pry-dark dark:text-white'>
                  Origin: <span className='text-grey font-normal'>{breedItem?.origin}</span>
                </p>
                <p className='font-medium text-pry-dark dark:text-white'>
                  Weight: <span className='text-grey font-normal'>{breedItem?.weight.imperial}</span>
                </p>
                <p className='font-medium text-pry-dark dark:text-white'>
                  Life span: <span className='text-grey font-normal'>{breedItem?.life_span}</span>
                </p>

              </div>
            </div>

            <div className='max-h-[100px] mt-2 pb-3 overflow-y-scroll reset'>
              <p className='font-medium pt-3 text-pry-dark dark:text-white'>Description:
                <span className='text-grey font-normal'> {breedItem?.description}</span>
              </p>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
}

export default BreedDetail;
