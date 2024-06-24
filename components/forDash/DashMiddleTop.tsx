import Link from "next/link";
import { FcMoneyTransfer } from "react-icons/fc";

const DashMiddleTop = () => {
  return (
    <div className="w-full h-1/2 flex flex-col lg:flex-row lg:gap-4 lg:my-2 text-white ">
      {/* BALANCE */}
      <section className=" w-full bg-gradient-to-br from-blue-950 via-purple-950/40 to-blue-900/20 items-start text-start p-1 md:p-2 lg:p-5 h-full rounded-lg lg:rounded-xl xl:rounded-[52px] flex flex-col text-white">
        <h1 className="dashlabels">Cash Balance</h1>
        <div className=" h-full flex w-full">
          <div className="flex w-full  lg:w-1/2 h-full justify-between items-stretch flex-col lg:pr-2">
            <h1 className=" text-4xl md:text-3xl lg:text-5xl font-bold">
              R4233.22
            </h1>
            <p className=" text-xl lg:text-lg text-neutral-300">
              You have around <b>R4233.22</b> available to disburse.
            </p>
            <Link
              className="w-full text-lg hover:bg-cyan-300 transition-all duration-300 ease-in-out hover:scale-95 hover:text-black bg-cyan-700 flex justify-center items-center  text-white rounded-md py-1"
              href="/create"
            >
              Publish Offer
            </Link>
          </div>
          <div className=" lg:flex hidden lg:w-1/2 h-full justify-center items-center ">
            <FcMoneyTransfer size="70%" />
          </div>
        </div>
      </section>

      {/* TOTAL BORROWED & DISBURSED PIE */}
      <section className=" w-full p-1 md:p-2 lg:p-5 h-full border-2 border-white rounded-md lg:rounded-lg"></section>

      {/* TINY GRAPHS & FIGURES */}
      <section className=" w-full p-1 md:p-2 lg:p-5 h-full border-2 border-white rounded-md lg:rounded-lg"></section>
    </div>
  );
};

export default DashMiddleTop;
