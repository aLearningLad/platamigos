import { UserHomeComp } from "@/components/foruserhome";

const UserHome = () => {
  return (
    <div className=" h-full flex flex-col items-center px-1 md:px-2 lg:px-12 xl:px-24 gap-3 lg:gap-7">
      <UserHomeComp />
    </div>
  );
};

export default UserHome;
