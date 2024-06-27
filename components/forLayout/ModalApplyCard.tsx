import { Tloansfromdb } from "@/types";
import CancelBtn from "./CancelBtn";
import SubmitApplication from "./SubmitApplication";

const ModalApplyCard: React.FC<Tloansfromdb> = ({ ...params }) => {
  return (
    <div className=" w-full h-full p-1 md:p-2 lg:p-5 xl:p-7 flex flex-col items-center justify-center">
      <header>
        <h1>{params.title}</h1>
      </header>

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
