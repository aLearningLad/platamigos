"use client";

import BorrowedCard from "./BorrowedCard";
import { Ildborrowed } from "@/interfaces";

const LDBorrowed: React.FC<Ildborrowed> = ({ borrowed, isBorrowedLoading }) => {
  if (isBorrowedLoading) {
    return (
      <div className=" w-1/2 h-full flex justify-center items-center">
        <h2 className=" text-lg">Collecting Borrowed Loans Data...</h2>
      </div>
    );
  }

  if (!borrowed || borrowed.length < 1) {
    return (
      <div className=" w-1/2 h-full flex justify-center items-center text-center bg-gradient-to-t from-orange-600/60 via-orange-500/20 to-transparent rounded-3xl ">
        <h3 className=" text-lg text-white font-semibold">
          You don't have any debt...yet
        </h3>
      </div>
    );
  }

  return (
    <div className=" flex w-1/2 p-3 flex-col overflow-auto gap-7">
      {borrowed?.map((loan: any) => (
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
