import React from 'react';
import { Outlet } from 'react-router-dom';

// components
import SideNav from './SideNav';
import PageHeader from './PageHeader';

interface Props {

}

const DefaultLayout: React.FC<Props> = (props) => {
  return (
    <main className='w-full lg:flex lg:justify-between block dark:bg-pry-dark dark:text-white min-h-screen'>
      <div className='hidden lg:block lg:w-1/2 w-0'>
        <SideNav />
      </div>
      <div className='lg:w-1/2 lg:px-5 px-3 w-full lg:fixed lg:left-1/2 inset-y-0 flex-col flex overflow-y-auto reset'>
        <PageHeader>
          <Outlet />
        </PageHeader>
      </div>
    </main>
  );
}

export default DefaultLayout;
