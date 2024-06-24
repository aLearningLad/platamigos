import Link from "next/link";
import { FcMoneyTransfer } from "react-icons/fc";
import DashBalance from "./DashBalance";
import DoughnutChart from "./DoughnutChart";

const DashMiddleTop = () => {
  return (
    <div className="w-full h-1/2 lg:h-1/2 flex flex-col lg:flex-row lg:gap-4 lg:my-2 text-white ">
      {/* BALANCE */}
      <DashBalance />

      {/* TOTAL BORROWED & DISBURSED PIE */}
      <section className=" w-full bg-gradient-to-br border-4 border-transparent hover:scale-95 transition-all duration-300 ease-in-out hover:border-neutral-400 from-blue-950 via-purple-950/40 to-blue-900/20 items-start text-start p-1 md:p-2 lg:p-5 h-full rounded-lg lg:rounded-xl xl:rounded-[22px] flex flex-col text-white">
        <h1 className="dashlabels">Your Splits</h1>
        <div className=" h-full w-full bg-transparent">
          <DoughnutChart />
        </div>
      </section>

      {/* TINY GRAPHS & FIGURES */}
      <section className=" w-full p-1 md:p-2 lg:p-5 h-full border-2 border-white rounded-md lg:rounded-lg"></section>
    </div>
  );
};

export default DashMiddleTop;
