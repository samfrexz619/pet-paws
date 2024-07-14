import EmptyState from "@/components/EmptyState";
import NavPath from "@/components/voting/NavPath";

const Dislikes = () => {
  return (
    <section className="h-[84vh] w-96% mx-auto py-3">
      <div className="pt-2 pb-4">
        <NavPath />
      </div>
      <div>
        <EmptyState />
      </div>
    </section>
  );
}

export default Dislikes;
