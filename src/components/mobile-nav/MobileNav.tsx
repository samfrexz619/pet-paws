import { NavLink, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { cardItems } from '../cardlink/card';


const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='w-14 h-14 rounded-20 bg-white dark:bg-white/5 text-accent flex items-center justify-center pt-2'>
          <svg width='30' height='30' viewBox='0 0 30 30'>
            <use xlinkHref="/sprite.svg#menu" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className='flex flex-col bg-[#F8F8F7] dark:bg-pry-dark min-w-[300px]'>
        <ul>
          <li className='mb-10'>
            <NavLink to='/' className="flex gap-x-2 py-1 items-center cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use xlinkHref="/sprite.svg#logo" />
              </svg>
              <h1 className="text-pry-dark dark:text-white text-2xl  font-medium">Samfrexz</h1>
            </NavLink>
          </li>

          {
            cardItems.map(link => (
              <li key={link.id} className='py-3'>
                <NavLink to={link.path} className={`${pathname === link.path ? 'bg-accent text-white' : 'bg-white text-accent dark:bg-white/10'} uppercase flex items-center justify-center w-full py-3 my-2 md:my-0 mx-auto h-9 rounded-10 hover:bg-accent-hover`}>
                  {link.variant}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
