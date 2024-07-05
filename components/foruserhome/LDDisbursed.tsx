"use client";

import { Ttodisburse } from "@/types";
import DisbursedCard from "./DisbursedCard";
import { Idisbursedcard, Ilddisbursed } from "@/interfaces";
import Link from "next/link";

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
          <div className="w-full h-full flex justify-center flex-col items-center text-center bg-gradient-to-tr from-pink-600/70 via-pink-400/10 to-transparent rounded-full  ">
            <h3 className=" text-lg font-semibold mb-3">
              You haven't granted any loans yet!
            </h3>
            <Link
              className=" w-fit px-7 border-4 bg-transparent text-pink-300 hover:font-semibold hover:scale-95 transition-all duration-500 ease-in-out border-pink-500 py-2 text-lg hover:bg-pink-500 rounded-lg hover:text-white"
              href="/all"
            >
              Fix This
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LDDisbursed;
