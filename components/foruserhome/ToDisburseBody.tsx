"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Tpending, Ttodisburse } from "@/types";

const ToDisburseBody = () => {
  const [toDisburse, setToDisburse] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;
      try {
        const { data: toDisburseData, error: toDisburseError } = await supabase
          .from("pending")
          .select("*")
          .eq("posterid", googleid);

        if (toDisburseError) {
          throw new Error(toDisburseError.details);
        }

        if (toDisburseData) {
          setIsLoading(false);
          console.log("This is data to disburse: ", toDisburseData);
          setToDisburse(toDisburseData);
        }
      } catch (error) {
        console.log("Error fetching to disburse: ", error);
      }
    };

    getResult();
  }, []);

  const handleGrant = async () => {
    try {
      // UPDATE HOMEFEED 'disbursed' COLUMN
      // DELETE ENTRY FROM 'pending'
      // DELETE ENTRY FROM 'to_disburse'
      // CREATE ENTRY IN 'granted_loans'
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <div className=" w-full h-full flex justify-center items-center text-lg text-neutral-200 rounded-2xl  ">
        Just a second...
      </div>
    );
  }

  if (toDisburse && toDisburse.length > 0) {
    return (
      <div className="w-full h-full rounded-2xl flex flex-col items-center gap-7 overflow-auto text-white p-3">
        {toDisburse?.map((item: Tpending) => (
          <div className="w-full min-h-[25vh] bg-gradient-to-b from-transparent via-pink-400/30 to-pink-600/70  rounded-2xl p-3 text-center flex flex-col items-center justify-center">
            <h1 className=" text-lg ">{item.applicant_name}</h1>
            <span className=" w-full flex justify-center gap-2 items-center ">
              <p className=" text-[12px]">is borrowing</p>
              <p className=" text-[16px] text-pink-700 bg-white rounded-md p-[2px] ">
                R{item.principal}
              </p>{" "}
              <p className=" text-[12px]">@{item.interest_rate}%</p>
            </span>
            <div className=" w-full h-full flex">
              <section className=" w-full h-full hover:scale-90 flex flex-col group items-center justify-center hover:bg-neutral-200 rounded-md transition-all duration-300 ease-in-out cursor-pointer">
                <p className=" text-lg font-extrabold group-hover:text-black ">
                  R{item.total_due}
                </p>
                <p className=" text-[12px] text-neutral-200 flex group-hover:hidden">
                  Repayment
                </p>
              </section>
              <section className=" w-full h-full hover:scale-90 group flex flex-col items-center justify-center hover:bg-neutral-200 rounded-md transition-all duration-300 ease-in-out cursor-pointer">
                <p className=" text-lg font-extrabold group-hover:text-black ">
                  {item.applicant_credit_score}
                </p>
                <p className=" text-[12px] text-neutral-200 flex group-hover:hidden">
                  Credit Score
                </p>
              </section>
              <section className=" w-full hover:scale-90 h-full group flex flex-col items-center justify-center hover:bg-neutral-200 rounded-md transition-all duration-300 ease-in-out cursor-pointer">
                <p className=" text-lg font-extrabold group-hover:text-black ">
                  R{item.instalment}
                </p>
                <p className=" text-[12px] text-neutral-200 flex group-hover:hidden">
                  Per Month
                </p>
              </section>
              <section className=" w-full hover:scale-90 group h-full flex flex-col items-center justify-center hover:bg-neutral-200 rounded-md transition-all duration-300 ease-in-out cursor-pointer">
                <p className=" text-[14px] font-extrabold group-hover:text-black">
                  {item.date_applied as string}
                </p>
                <p className=" text-[12px] text-neutral-200 flex group-hover:hidden">
                  Applied
                </p>
              </section>
            </div>
            <button
              onClick={handleGrant}
              className=" w-10/12 py-2 mt-1 hover:bg-white hover:border-white hover:font-extrabold hover:scale-95 transition-all duration-300 ease-in-out text-lg bg-gradient-to-tr rounded-lg from-purple-800/50 via-cyan-600/70 to-cyan-700/90 text-white font-semibold"
            >
              Grant
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className=" w-full h-full flex justify-center items-center text-lg text-white bg-gradient-to-tl from-pink-600/60 via-pink-300/30 to-transparent rounded-2xl ">
      Nobody has applied for your loans yet
    </div>
  );
};

export default ToDisburseBody;
