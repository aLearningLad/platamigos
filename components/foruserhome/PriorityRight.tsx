import { createClient } from "@/utils/supabase/server";
import FeedLoanMiniCard from "./FeedLoanMiniCard";
import { FaAngleDoubleDown } from "react-icons/fa";
import { applyForLoan } from "@/utils/myFxns/applyForLoan";

const PriorityRight = async () => {
  const supabase = createClient();
  const { data: homefeed, error: homeFeedError } = await supabase
    .from("homefeed")
    .select("*");

  console.log("homefeed here: ", homefeed);

  return (
    <div className="h-full relative w-full lg:w-[30%] overflow-auto px-1 md:px-2 lg:px-3 flex flex-col items-center gap-3 md:gap-5">
      <FeedLoanMiniCard />
      <FeedLoanMiniCard />
      <FeedLoanMiniCard />
      <FeedLoanMiniCard />
      <FeedLoanMiniCard />
      <FeedLoanMiniCard />
      <FeedLoanMiniCard />
      <span className="sticky bottom-0 w-full flex justify-center items-center flex-col py-3 ">
        <p className=" text-lg text-neutral-50">Scroll down</p>
        <FaAngleDoubleDown size={18} className=" text-neutral-50" />
      </span>
    </div>
  );
};

export default PriorityRight;
