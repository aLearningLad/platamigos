import { DashEnd, DashMiddle } from "@/components/forDash";
import { getDbUser } from "@/utils/myFxns/getDbUser";

const Dashboard = async () => {
  const thisUserFromDb = getDbUser();
  console.log("User details to summerize", thisUserFromDb);

  return (
    <div className=" w-full h-full flex items-center text-white flex-col ">
      <header className=" w-full h-[15vh] lg:h-[10vh] border-2 border-white flex justify-between px-2 md:px-3 lg:px-12 py-1 lg:py-2 items-center ">
        Header section here
      </header>

      <DashMiddle />
      <DashEnd />
    </div>
  );
};

export default Dashboard;
