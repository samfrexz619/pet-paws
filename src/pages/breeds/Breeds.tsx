import NavPath from "@/components/voting/NavPath";
import { SelectItem } from "@/components/ui/select";
import desc from '@/assets/images/desc.svg'
import asc from '@/assets/images/asc.svg'
import CustomSelect from "@/components/breeds/CustomSelect";
import { useGetBreeds } from "@/hooks/useGetBreeds";

const Breeds = () => {
  const { breeds } = useGetBreeds()

  const selectItems = [
    {
      id: '1',
      name: '5'
    },
    {
      id: '2',
      name: '10'
    },
    {
      id: '3',
      name: '15'
    },
    {
      id: '4',
      name: '20'
    },
  ]
  // console.log(breeds);

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
          <div className="flex-1 md:w-[102px]">
            <CustomSelect triggerCls="outline-none w-full text-grey" contentCls="rounded-10" placeholder="Limit: 10">
              {selectItems.map(item => (
                <SelectItem key={item.id} value={`Limit: ${item.name}`}>Limit: {item.name}</SelectItem>
              ))}
            </CustomSelect>
          </div>
          <button className="h-10 w-10 flex items-center justify-center bg-pry-bg rounded-10 dark:bg-white/5">
            <img src={desc} alt="" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center bg-pry-bg rounded-10 dark:bg-white/5">
            <img src={asc} alt="" />
          </button>
        </div>
      </div>
      <section className="w-full max-h-[75vh]">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="bg-red-200 rounded-20 h-[316px] row-span-3"></div>
          <div className="bg-red-200 rounded-20 h-[150px] col-span-2"></div>
          <div className="bg-red-200 rounded-20 h-[150px] col-span-1"></div>
          <div className="bg-red-200 rounded-20 h-[150px] row-span-2 col-span-1"></div>
        </div>
      </section>
    </section>
  );
}

export default Breeds;
