"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Tpending, Ttodisburse } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ToDisburseBody = () => {
  const [toDisburse, setToDisburse] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [oldBalance, setOldBalance] = useState<number>();
  const router = useRouter();

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
        const { data: DbBalance, error: DbBalanceError } = await supabase
          .from("allusers")
          .select("current_balance")
          .eq("googleid", googleid);
        setOldBalance(DbBalance![0].current_balance);
      } catch (error) {
        console.log("Error fetching to disburse: ", error);
      }
    };

    getResult();
  }, []);

  const handleGrant = async (
    loanid: string,
    applicant_id: string,
    principal_amount: number,
    applicant_name: string,
    total_due: number,
    interest_rate: number
  ) => {
    const supabase = createClient();
    const googleid = (await supabase.auth.getUser()).data.user?.id;

    if (oldBalance && oldBalance > principal_amount) {
      try {
        // UPDATE HOMEFEED 'disbursed' COLUMN ==> BRAVO!
        const { error: homefeedUpdateError } = await supabase
          .from("homefeed")
          .update({
            disbursed: true,
          });

        // DELETE ENTRY FROM 'pending' ===> BRAVO
        const { error: deleteFromPendingError } = await supabase
          .from("pending")
          .delete()
          .eq("loanid", loanid);

        // DELETE ENTRY FROM 'to_disburse'
        const { error: deleteFromDisburseError } = await supabase
          .from("to_disburse")
          .delete()
          .eq("loanid", loanid);

        // CREATE ENTRY IN 'granted_loans'
        const { data: granted_data, error: grantedError } = await supabase
          .from("granted_loans")
          .insert({
            applicant_id,
            lender_id: googleid,
            loan_id: loanid,
            principal_amount,
            applicant_name,
            total_due,
            interest_rate,
          });

        // DEDUCT AMOUNT FROM GRANTOR'S BALANCE IN allusers TABLE
        const newBalance = oldBalance! - principal_amount;
        const { error: updateGrantorBalanceError } = await supabase
          .from("allusers")
          .update({
            current_balance: newBalance,
          })
          .eq("googleid", googleid);

        if (updateGrantorBalanceError) {
          throw new Error(updateGrantorBalanceError.details);
        }

        // ADD AMOUNT TO APPLICANT'S BALANCE IN homefeed TABLE
        const { data: applicantFunds, error: applicantFundsError } =
          await supabase
            .from("allusers")
            .select("current_balance")
            .eq("googleid", applicant_id);
        const applicant_new_balance =
          applicantFunds![0].current_balance + principal_amount;
        const { error: updateGranteeBalanceError } = await supabase
          .from("allusers")
          .update({
            current_balance: applicant_new_balance,
          })
          .eq("googleid", applicant_id);

        // ADD PRINCIPAL TO LENDER'S total_disbursed COLUMN IN allusers
        const { data: totalDisbursedAmount, error: totalDisbursedAmountError } =
          await supabase
            .from("allusers")
            .select("total_disbursed")
            .eq("googleid", googleid);
        const new_total_disbursed =
          totalDisbursedAmount![0].total_disbursed + principal_amount;
        const { error: updateTotalDisbursedError } = await supabase
          .from("allusers")
          .update({
            total_disbursed: new_total_disbursed,
          })
          .eq("googleid", googleid);

        if (updateTotalDisbursedError) {
          throw new Error(updateTotalDisbursedError.details);
        }

        // ADD total_due TO APPLICANT'S total_borrowed COLUMN IN allusers
        const { data: total_borrowed, error: total_borrowedError } =
          await supabase
            .from("allusers")
            .select("total_borrowed")
            .eq("googleid", applicant_id);
        const new_total_borrowed =
          total_borrowed![0].total_borrowed + total_due;

        const { error: updateTotalBorrowedError } = await supabase
          .from("allusers")
          .update({
            total_borrowed: new_total_borrowed,
          })
          .eq("googleid", applicant_id);

        if (updateTotalBorrowedError) {
          throw new Error(updateTotalBorrowedError.details);
        }

        // ADD total_due TO APPLICANT'S total_outstanding COLUMN IN allusers
        const { data: totalOutstanding, error: totalOutstandingError } =
          await supabase
            .from("allusers")
            .select("total_outstanding")
            .eq("googleid", applicant_id);
        const newOutsanding =
          totalOutstanding![0].total_outstanding + total_due;
        const { error: updateTotalOutstandingError } = await supabase
          .from("allusers")
          .update({
            total_outstanding: newOutsanding,
          });

        if (updateTotalOutstandingError) {
          throw new Error(updateTotalOutstandingError.details);
        }

        if (updateGranteeBalanceError) {
          throw new Error(updateGranteeBalanceError.details);
        }

        if (homefeedUpdateError) {
          throw new Error(homefeedUpdateError.details);
        }
        if (deleteFromPendingError) {
          throw new Error(deleteFromPendingError.details);
        }
        if (deleteFromDisburseError) {
          throw new Error(deleteFromDisburseError.details);
        }
        if (grantedError) {
          throw new Error(grantedError.details);
        }

        if (
          !homefeedUpdateError &&
          !deleteFromPendingError &&
          !deleteFromDisburseError &&
          !grantedError
        ) {
          router.refresh();
          toast.success("Granted!");
        }
      } catch (error) {
        console.log("Error while granting loan: ", error);
      }
    } else {
      toast.error("Insufficient funds!");
    }
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
          <div
            key={item.loanid}
            className="w-full min-h-[25vh] bg-gradient-to-b from-transparent via-pink-400/30 to-pink-600/70  rounded-2xl p-3 text-center flex flex-col items-center justify-center"
          >
            <h1 className=" text-lg ">{item.applicant_name}</h1>
            <span className=" w-full flex justify-center gap-2 items-center ">
              <p className=" text-[12px]">is borrowing</p>
              <p className=" text-[16px] text-pink-950 bg-white rounded-md p-[2px] ">
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
              onClick={() =>
                handleGrant(
                  item.loanid,
                  item.applicant_id,
                  item.principal,
                  item.applicant_name,
                  item.total_due,
                  item.interest_rate
                )
              }
              className=" w-10/12 py-2 mt-1 hover:bg-white hover:border-white hover:font-extrabold hover:scale-95 transition-all duration-300 ease-in-out text-lg bg-gradient-to-tr rounded-lg from-purple-800/50 via-cyan-600/70 to-cyan-700/90 text-white font-semibold"
            >
              Grant
              {/* {oldBalance} */}
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
