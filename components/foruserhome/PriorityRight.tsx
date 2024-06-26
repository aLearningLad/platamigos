import { createClient } from "@/utils/supabase/server";
import FeedLoanMiniCard from "./FeedLoanMiniCard";
import { FaAngleDoubleDown } from "react-icons/fa";
import { applyForLoan } from "@/utils/myFxns/applyForLoan";
import { Tloansfromdb } from "@/types";

const PriorityRight = async () => {
  const supabase = createClient();
  const { data: homefeed, error: homeFeedError } = await supabase
    .from("homefeed")
    .select("*");

  // console.log("homefeed here: ", homefeed);

  return (
    <div className="h-full relative w-full lg:w-[30%] px-1 md:px-2 lg:px-3">
      {homefeed && homefeed.length > 0 ? (
        <div className=" w-full h-full flex flex-col items-center gap-3 md:gap-5 overflow-auto">
          {homefeed.map((card) => (
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
            />
          ))}
        </div>
      ) : (
        <div className=" sticky top-[20%] bottom-[20%] left-0 right-0 text-white text-2xl ">
          No loans posted yet
        </div>
      )}
      <span className="sticky bottom-0 w-full flex justify-center items-center flex-col py-3 border-4 border-white ">
        <p className=" text-lg text-neutral-50">Scroll down</p>
        <FaAngleDoubleDown size={18} className=" text-neutral-50" />
      </span>
    </div>
  );
};

export default PriorityRight;
