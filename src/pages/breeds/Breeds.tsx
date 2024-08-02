import { useMemo, useState } from "react";
import NavPath from "@/components/voting/NavPath";
import {
  SelectItem, Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomSelect from "@/components/breeds/CustomSelect";
import { useGetBreeds } from "@/hooks/useGetBreeds";
import BreedImage from "@/components/breeds/BreedImage";
import { Skeleton } from "@/components/ui/skeleton";
import { useCatApiContext } from "@/context/CatApiContext";
import EmojiIcons from "@/components/ui/EmojiIcon";
import EmptyState from "@/components/EmptyState";




const Breeds = () => {
  const { breeds, loading } = useGetBreeds()
  const { dispatch, query } = useCatApiContext()

  const selectItems = [5, 10, 15, 20]

  const [activeBtn, setActiveBtn] = useState<'asc' | 'desc'>('asc');

  const [selectVal, setSelectedVal] = useState('10')

  const handleChange = (value: string) => {
    setSelectedVal(value)
    console.log(selectVal)
  }
  console.time('filter breed')


  const filteredBreeds = useMemo(() => breeds.filter(breed => breed.name.toLowerCase().includes(query.toLowerCase())), [breeds, query])

  console.timeEnd('filter breed')

  const handleDescOrder = (btn: 'desc') => {
    const sortedBreed = filteredBreeds.sort((a, b) => a.name < b.name ? 1 : -1)
    dispatch({ type: 'SET_BREEDS', payload: sortedBreed })
    setActiveBtn(btn)
  }

  const handleAscOrder = (btn: 'asc') => {
    const sortedBreed = filteredBreeds.sort((a, b) => a.name > b.name ? 1 : -1)
    dispatch({ type: 'SET_BREEDS', payload: sortedBreed })
    setActiveBtn(btn)
  }

  const btnClass = 'h-10 w-10 flex items-center justify-center rounded-10 dark:bg-white/5';


  return (
    <section className="w-96% mx-auto py-3">
      <div className="pt-2 pb-4 md:flex justify-between">
        <NavPath />
        <div className="w-full md:w-[225px] mt-4 md:mt-0">
          <CustomSelect triggerCls="outline-none w-full text-grey" contentCls="max-h-[300px] rounded-10" placeholder="All Breeds">
            {breeds.map(breed => (
              <SelectItem
                key={breed.id}
                value={breed.name}
              >
                {breed.name}
              </SelectItem>
            ))}
          </CustomSelect>
        </div>

        <div className="flex gap-x-3 mt-4 md:mt-0">
          <div className="flex-1 md:w-[105px]">
            <Select onValueChange={handleChange} defaultValue=''>
              <SelectTrigger className='outline-none w-full text-12 text-grey'>
                <SelectValue placeholder='Limit: 10' />
              </SelectTrigger>
              <SelectContent className={`rounded-10 text-12 dark:bg-white/10`}>
                {selectItems.map((item) => (
                  <SelectItem key={item} value={`${item}`}>Limit: {item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <button onClick={() => handleAscOrder('asc')} className={`${btnClass} ${activeBtn === 'asc' ? 'bg-accent text-white dark:border-2 dark:border-accent/5 dark:text-accent' : 'text-grey bg-pry-bg'}`}>
            <EmojiIcons name="asc" />
          </button>
          <button onClick={() => handleDescOrder('desc')} className={`${btnClass} ${activeBtn === 'desc' ? 'bg-accent text-white dark:border-2 dark:border-accent/5 dark:text-accent' : 'text-grey bg-pry-bg'}`}>
            <EmojiIcons name="desc" />
          </button>
        </div>
      </div>

      <section className="w-full max-h-[75vh] overflow-y-scroll reset">
        {loading &&
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Skeleton className="rounded-10 w-full h-[250px] bg-grey" />
          </div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredBreeds?.slice(0, parseInt(selectVal)).map((breed, index) => (
            <BreedImage
              key={breed.id}
              breedImg={breed}
              index={index}
            />
          ))}
        </div>
        {filteredBreeds.length === 0 && <EmptyState />}
      </section>
    </section>
  );
}

export default Breeds;
