import SideNav from "@/components/layouts/SideNav";


const HomePage = () => {
  return (
    <>
      <main className={`my-2 lg:h-screen bg-bgl bg-cover bg-no-repeat dark:bg-dgl`}>
      </main>
      <div className="lg:hidden block w-full">
        <SideNav />
      </div>
    </>
  );
}

export default HomePage;
