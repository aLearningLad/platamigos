import { Tloansfromdb, TloansfromdbForMiniCard } from "@/types";
import CancelBtn from "./CancelBtn";
import SubmitApplication from "./SubmitApplication";

const ModalApplyCard: React.FC<TloansfromdbForMiniCard> = ({ ...params }) => {
  return (
    <div className=" w-full h-full p-1 md:p-2 lg:p-5 xl:p-7 flex flex-col items-center justify-center text-white">
      <header>
        <h1 className=" text-xl font-semibold ">{params.title}</h1>
      </header>
      <span>
        <p>offered by</p>
        <h2>{params.lendername}</h2>
      </span>

      <div className=" w-9/12 min-h-fit my-3 md:my-5 lg:my-12 xl:my-16 max-h-[30%] overflow-auto bg-neutral-500/30 rounded-3xl  p-2 md:p-3 lg:p-5 xl:p-8 text-start ">
        <h3 className="text-white text-lg lg:text-[14px] ">{params.purpose}</h3>
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
