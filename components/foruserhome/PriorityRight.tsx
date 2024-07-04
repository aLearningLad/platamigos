import { createClient } from "@/utils/supabase/server";
import FeedLoanMiniCard from "./FeedLoanMiniCard";
import { FaAngleDoubleDown } from "react-icons/fa";

const PriorityRight = async () => {
  const supabase = createClient();
  const googleid = (await supabase.auth.getUser()).data.user?.id;
  const { data: homefeed, error: homeFeedError } = await supabase
    .from("homefeed")
    .select("*")
    .neq("lenderid", googleid);

  const { data: userApplied } = await supabase
    .from("pending")
    .select("loanid")
    .eq("applicant_id", googleid);

  const appliedLoans = new Set(userApplied?.map((loan) => loan.loanid));
  // console.log("Already applied for: ", appliedLoans);

  const toShow = homefeed?.filter((loan) => !appliedLoans.has(loan.loan_id));

  // console.log("Loans to show: ", toShow);

  return (
    <div className="lg:h-full h-[70vh] bg-blue-950/70 rounded-2xl relative w-full lg:w-[30%] px-1 md:px-2 lg:px-3">
      <header className=" lg:hidden flex w-full py-3 justify-center items-center text-center pt-3">
        <h1 className="text-[28px] text-white border-b-2 rounded-lg border-white px-3">
          Peer Offers
        </h1>
      </header>
      {homefeed && homefeed.length > 0 && toShow && toShow?.length > 0 ? (
        <div className="w-full h-full flex flex-row lg:flex-col items-center gap-3 md:gap-5 overflow-auto py-4 lg:pb-28">
          {toShow?.map((card, index) => (
            <FeedLoanMiniCard
              expiry_date={card.expiry_date}
              instalment={card.instalment}
              lenderName={card.lendername}
              interest_rate={card.interest_rate}
              loan_id={card.loan_id}
              months={card.number_payments}
              principal_offer={card.principal_offer}
              purpose={card.purpose}
              title={card.title}
              total_due={card.total_due}
              date_posted={card.date_posted}
              key={card.loan_id}
              lenderid={card.lenderid}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="sticky top-[20%] bottom-[20%] left-0 right-0 text-white text-2xl h-full flex justify-center items-center ">
          No loans posted yet
        </div>
      )}
      <span className="sticky bottom-0 w-full hidden lg:flex justify-center items-center flex-col py-3 bg-transparent border-transparent backdrop-blur-md border-4 z-[5] ">
        <p className=" text-lg text-neutral-50">Scroll down</p>
        <FaAngleDoubleDown size={18} className=" text-neutral-50" />
      </span>
    </div>
  );
};

export default PriorityRight;
