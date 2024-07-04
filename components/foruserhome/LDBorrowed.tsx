"use client";

import { TgrantedLoans } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import BorrowedCard from "./BorrowedCard";

const LDBorrowed = () => {
  const [borrowed, setBorrowed] = useState<TgrantedLoans[] | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBorrowed = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;
      try {
        const { data: borrowedData, error: borrowedDataError } = await supabase
          .from("granted_loans")
          .select("*")
          .eq("applicant_id", googleid);

        if (borrowedData && borrowedData?.length > 0) {
          setBorrowed(borrowedData!);
          setIsLoading(false);
          console.log(borrowedData![0]);
        } else {
          setBorrowed(null);
          setIsLoading(false);
        }

        if (borrowedDataError) {
          throw new Error(borrowedDataError.details);
        }
      } catch (error) {
        console.log("Error retrieving borrowing data: ", error);
      }
    };

    getBorrowed();
  }, []);

  if (isLoading) {
    return (
      <div className=" w-full h-full flex justify-center items-center">
        <h2 className=" text-lg">Loading...</h2>
      </div>
    );
  }

  return (
    <div className=" flex w-1/2 p-3 flex-col overflow-auto gap-7">
      {borrowed?.map((loan) => (
        <BorrowedCard
          applicant_id={loan.applicant_id}
          date_granted={loan.date_granted}
          applicant_name={loan.applicant_name}
          interest_rate={loan.interest_rate}
          lender_id={loan.lender_id}
          loan_id={loan.loan_id}
          principal_amount={loan.principal_amount}
          total_due={loan.total_due}
          key={loan.loan_id}
        />
      ))}
    </div>
  );
};

export default LDBorrowed;
