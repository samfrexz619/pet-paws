import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Input } from '../ui/input';
import EmojiIcons from '../ui/EmojiIcon';
import MobileNav from '../mobile-nav/MobileNav';
// componnets


interface Props {
  children: React.ReactNode;
}

const PageHeader: React.FC<Props> = (props) => {
  const { children } = props;

  const { pathname } = useLocation()
  const check = pathname === 'likes'
  console.log(check)

  const emojiLinks = [
    {
      path: 'likes',
      emoji: 'like',
      id: 2
    },
    {
      path: 'favourites',
      emoji: 'favorite',
      id: 1
    },
    {
      path: 'dislikes',
      emoji: 'sad',
      id: 3
    },
  ]

  return (
    <>
      {pathname !== '/' &&
        <header className='w-full xl:max-w-[680px] pt-7 mb-4'>
          <nav className='w-full flex justify-between flex-wrap md:flex-nowrap gap-y-4 lg:gap-y-0'>
            {/* mobile-menu btn */}
            <div className='lg:hidden block order-1 md:order-none'>
              <MobileNav />
            </div>
            {/* search input */}
            <div className='relative w-full md:w-[420px] order-3 md:order-none'>
              <Input type='search' placeholder='Search for breeds by name' />
              <span className='w-10 dark:bg-accent/20 h-10 text-accent bg-accent-hover rounded-10 flex justify-center items-center absolute right-4 top-2'>
                <svg width='20' height='20' viewBox='0 0 20 20'>
                  <use xlinkHref={`/sprite.svg#search`} />
                </svg>
              </span>
            </div>
            {/* links */}
            <div className="flex gap-x-2 order-2 md:order-none">
              {
                emojiLinks.map(link => (
                  <NavLink to={link.path}
                    key={link.id}
                    className={`${link.path === pathname.slice(1) ? 'bg-accent text-white' : 'bg-white text-accent dark:bg-white/5'} w-14 h-14 rounded-20 flex items-center justify-center hover:bg-accent-hover`}
                  >
                    <EmojiIcons name={link.emoji} />
                  </NavLink>
                ))
              }
            </div>
          </nav>
        </header>
      }
      <main className='w-full bg-white dark:bg-white/5 rounded-20'>
        {children}
      </main>
    </>
  );
}

export default PageHeader;
