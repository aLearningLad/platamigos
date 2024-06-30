import { createClient } from "@/utils/supabase/server";
import FeedLoanMiniCard from "./FeedLoanMiniCard";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Tloansfromdb } from "@/types";

const PriorityRight = async () => {
  let item: Tloansfromdb;
  let thisId: any;
  let toShow: Tloansfromdb[] | any[] = [];
  const supabase = createClient();
  const googleid = (await supabase.auth.getUser()).data.user?.id;
  const { data: homefeed, error: homeFeedError } = await supabase
    .from("homefeed")
    .select("*");

  // FETCHING ALL PENDING USER LOANS FROM DATABASE. EACH LOAN'S ID WILL BE USED FOR COMPARISON TO LOANS ON THE HOME FEED.
  // CONT. --> IF THE IDs MATCH, IT MEANS USER HAS APPLIED FOR THAT LOAN, AND IT WILL NOT SHOW ON HOME FEED
  const { data: userApplied } = await supabase
    .from("pending")
    .select("loanid")
    .eq("applicant_id", googleid);

  // THIS WILL ADD ALL LOANS THAT HAVEN'T BEEN APPLIED FOR TO A NEW ARRAY. THIS ARRAY IS WHAT THE USER WILL SEE.
  for (item of homefeed!) {
    for (thisId of userApplied!) {
      if (item.loan_id === thisId.loanid) {
        console.log("You applied for this loan: ", thisId.loanid);
      } else {
        toShow.push(item);
      }
    }
  }

  return (
    <div className="h-full relative w-full lg:w-[30%] px-1 md:px-2 lg:px-3">
      {homefeed && homefeed.length > 0 ? (
        <div className="w-full h-full flex flex-col items-center gap-3 md:gap-5 overflow-auto">
          {toShow.map((card, index) => (
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
        <div className=" sticky top-[20%] bottom-[20%] left-0 right-0 text-white text-2xl ">
          No loans posted yet
        </div>
      )}
      <span className="sticky bottom-0 w-full flex justify-center items-center flex-col py-3 bg-transparent border-transparent backdrop-blur-md border-4 z-[5] ">
        <p className=" text-lg text-neutral-50">Scroll down</p>
        <FaAngleDoubleDown size={18} className=" text-neutral-50" />
      </span>
    </div>
  );
};

export default PriorityRight;
