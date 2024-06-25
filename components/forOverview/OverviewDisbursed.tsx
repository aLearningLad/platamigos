import { getAllPublished } from "@/utils/myFxns/getAllPublished";

const OverviewDisbursed = async () => {
  const disbursed = getAllPublished();

  console.log(disbursed);

  return (
    <div className="w-full relative lg:w-1/2 flex flex-col items-center lg:items-start px-2 md:px-3 lg:px-5 xl:px-7 py-3 lg:py-5">
      <header className=" w-full sticky top-0 bg-black border-4 border-white py-3">
        <h1 className=" text-3xl font-semibold">Disbursed</h1>
      </header>
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2 p-2 md:p-4 lg:p-8 xl:p-12 overflow-auto border-4 border-white"></div>
    </div>
  );
};

export default OverviewDisbursed;
