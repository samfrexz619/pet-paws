import SideNav from "@/components/layouts/SideNav";


const HomePage = () => {

  return (
    <>
      <main className="my-2 lg:h-screen bg-[url('@/assets/images/girl-pet.png')] bg-cover bg-no-repeat dark:bg-[url('@/assets/images/dark-girl.png')]">
      </main>
      <div className="lg:hidden block w-full">
        <SideNav />
      </div>
    </>
  );
}

export default HomePage;
