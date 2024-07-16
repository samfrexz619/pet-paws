import CardLink from "@/components/cardlink/CardLink";
import { cardItems } from "@/components/cardlink/card";
import ToggleSwitch from '../toggle/ToggleSwitch';
import { NavLink } from 'react-router-dom';



const SideNav = () => {
  return (
    <aside className='lg:w-3/4 w-95 mx-auto'>
      <header className="w-full h-24 items-center flex justify-between">
        <NavLink to='/' className="flex gap-x-2 py-1 items-center cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref="/sprite.svg#logo" />
          </svg>
          <h1 className="text-pry-dark dark:text-white text-2xl  font-medium">Samfrexz</h1>
        </NavLink>
        <div>
          <ToggleSwitch />
        </div>
      </header>

      <div className="pt-10">
        <h1 className="text-pry-dark text-44 font-medium dark:text-white">
          Hi!<span>&#128075;</span>
        </h1>
        <p className="text-grey text-20">
          Welcome to Samfrexz PetCats 2024
        </p>
      </div>

      <div>
        <p className="text-20 py-6 dark:text-white text-pry-dark">
          Lets start using The Cat API
        </p>
        <div className="flex md:gap-x-8 w-full flex-col gap-y-5 md:flex-row">
          {
            cardItems.map(card => (
              <CardLink
                key={card.id}
                variant={card.variant}
                path={card.path}
                imgPath={card.img}
                alt={card.alt}
              />
            ))
          }
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
