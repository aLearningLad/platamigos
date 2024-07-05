"use client";

import { Ttodisburse } from "@/types";
import DisbursedCard from "./DisbursedCard";
import { Idisbursedcard, Ilddisbursed } from "@/interfaces";

const LDDisbursed: React.FC<Ilddisbursed> = ({
  disbursed,
  isDisbursedLoading,
}) => {
  if (isDisbursedLoading) {
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
          <div className=" w-full h-full overflow-auto flex flex-col gap-7 items-center ">
            {disbursed.map((loan: any, index: number) => (
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
