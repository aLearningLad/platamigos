"use client";

import { TgrantedLoans } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import DisbursedCard from "./DisbursedCard";

const LDDisbursed = () => {
  const [disbursed, setDisbursed] = useState<TgrantedLoans[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDetails = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;

      try {
        const { data: disbursedData, error: disbursedDataError } =
          await supabase
            .from("granted_loans")
            .select("*")
            .eq("lender_id", googleid);
        console.log(disbursedData);

        if (disbursedData && disbursedData.length > 0) {
          setDisbursed(disbursedData);
          setIsLoading(false);
        } else {
          setDisbursed(null);
          setIsLoading(false);
        }

        if (disbursedDataError) {
          throw new Error(disbursedDataError.details);
        }
      } catch (error) {
        console.log("Error while collecting disbursed loans: ", error);
      }
    };

    getDetails();
  }, []);

  if (isLoading) {
    return (
      <div className=" w-full h-full flex justify-center items-center text-lg text-center">
        Hang on a second...
      </div>
    );
  }

  return (
    <div className=" flex w-1/2 p-2 flex-col relative">
      <header className="w-full sticky top-0 z-[5] flex justify-center pb-2">
        <h1 className=" text-lg text-white">Loans {"you've"} granted</h1>
      </header>

      <div className="w-full h-full relative overflow-auto flex flex-col justify-center">
        {disbursed ? (
          <div className=" w-full h-full overflow-auto flex flex-col gap-7">
            {disbursed.map((loan, index) => (
              <DisbursedCard
                applicant_name={loan.applicant_name}
                index={index}
                total_due={loan.total_due}
                key={loan.loan_id}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center flex-col items-center text-center  ">
            <h3 className=" text-lg font-semibold mb-3">
              You haven't granted any loans yet!
            </h3>
            <button>Fix This</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LDDisbursed;
