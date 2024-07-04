import HomeMiddleTabs from "./HomeMiddleTabs";
import PriorityFeed from "./PriorityFeed";

const UserHomeComp = () => {
  return (
    <div className="lg:h-full h-fit flex flex-col items-center py-2 md:py-3 lg:py-7 px-1 md:px-2 lg:px-12 xl:px-24 gap-3 lg:gap-5">
      <PriorityFeed />
      <HomeMiddleTabs />
    </div>
  );
};

export default UserHomeComp;
