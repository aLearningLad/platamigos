import { Tloansfromdb, TloansfromdbForMiniCard } from "@/types";
import CancelBtn from "./CancelBtn";
import SubmitApplication from "./SubmitApplication";
import { GiCash } from "react-icons/gi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { AiFillAccountBook } from "react-icons/ai";
import { FaPiggyBank } from "react-icons/fa6";

const ModalApplyCard: React.FC<TloansfromdbForMiniCard> = ({ ...params }) => {
  return (
    <div className=" w-full h-full p-1 md:p-2 lg:p-5 xl:p-7 flex flex-col items-center justify-center text-white">
      <header>
        <h1 className=" text-xl lg:text-2xl font-semibold ">{params.title}</h1>
      </header>
      <span>
        <p className=" text-[14px] ">offered by</p>
        <h2 className=" text-[18px] ">{params.lendername}</h2>
      </span>

      <div className=" w-full lg:w-9/12 flex-col items-center min-h-fit flex my-3 md:my-5 lg:my-12 xl:my-16 max-h-[35vh] lg:max-h-[30%] overflow-auto bg-neutral-500/30 rounded-3xl  p-2 md:p-3 lg:p-5 xl:p-8 text-center lg:text-start ">
        <h3 className=" text-[18px] lg:text-[22px] px-5 lg:px-8 border-b-2  ">
          Intended Usage of Funds
        </h3>
        <h3 className="text-white text-[16px] lg:text-[14px] ">
          {params.purpose}
        </h3>
      </div>

      <div className=" w-full py-2 lg:py-5 grid grid-cols-2 lg:flex flex-col lg:flex-row items-center">
        <section className=" hover:bg-neutral-100/10 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 w-full h-full p-3 flex flex-col items-center justify-center text-center">
          <GiCash size={30} color="#adff2f" />
          <h2 className=" text-[16px] flex items-center font-extrabold lg:text-[22px] bg-gradient-to-r from-lime-400 to-emerald-700 bg-clip-text text-transparent">
            <p className=" text-[16px]">R</p>
            {params.principal_offer}
          </h2>
          <p className="text-[12px] lg:text-[14px]  ">Offered</p>
        </section>
        <section className=" hover:bg-neutral-100/10 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 w-full h-full p-3 flex flex-col items-center justify-center text-center">
          <FaBalanceScaleLeft size={30} color="#ff00ff" />
          <h2 className=" text-[16px] font-extrabold lg:text-[22px] bg-gradient-to-b from-fuchsia-400 to-pink-700 bg-clip-text text-transparent">
            {params.interest_rate}%
          </h2>
          <p className="text-[12px] lg:text-[14px] ">Interest</p>
        </section>
        <section className=" hover:bg-neutral-100/10 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 w-full h-full p-3 flex flex-col items-center justify-center text-center">
          <AiFillAccountBook size={30} color="#00b7eb" />
          <h2 className=" text-[16px] flex items-center font-extrabold lg:text-[22px] bg-gradient-to-t from-cyan-400 to-sky-700 bg-clip-text text-transparent">
            <p className=" text-sm">x</p> {params.number_payments}
          </h2>
          <p className="text-[12px] lg:text-[14px] ">Payments</p>
        </section>
        <section className=" hover:bg-neutral-100/10 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 w-full h-full p-3 flex flex-col items-center justify-center text-center">
          <FaPiggyBank size={30} color="#ffc40c " />
          <h2 className=" text-[16px] flex items-center font-extrabold lg:text-[22px] bg-gradient-to-t from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            <p className=" text-[16px]">R</p> {params.total_due}
          </h2>
          <p className="text-[12px] lg:text-[14px] ">Total due</p>
        </section>
      </div>

      <SubmitApplication
        key={params.loan_id}
        expiry_date={params.expiry_date}
        instalment={params.instalment}
        interest_rate={params.interest_rate}
        loanid={params.loan_id}
        posterid={params.lenderid}
        principal={params.principal_offer}
        purpose={params.purpose}
        total_due={params.total_due}
        months={params.months ? (params.months as number) : 3}
      />
      <CancelBtn />
    </div>
  );
};

export default ModalApplyCard;
