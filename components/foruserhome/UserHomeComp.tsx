import PriorityFeed from "./PriorityFeed";

const UserHomeComp = () => {
  return (
    <div className="h-full flex flex-col items-center py-2 md:py-3 lg:py-7 xl:py-9 px-1 md:px-2 lg:px-12 xl:px-24 gap-3 lg:gap-7">
      <PriorityFeed />
    </div>
  );
};

export default UserHomeComp;
