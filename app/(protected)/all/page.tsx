import { LoanCard } from "@/components/forLoansPage";
import { Tloansfromdb } from "@/types";
import { getAllPublished } from "@/utils/myFxns/getAllPublished";
import React from "react";

const AllLoansPage = async () => {
  const loans = await getAllPublished();

  // console.log("These are the loans: ", loans);

  return (
    <div className=" w-full h-full flex flex-col relative">
      <header className="w-full float-start justify-center items-center text-center py-2 md:py-3 lg:py-5 sticky top-0 bg-black">
        <h1 className=" text-5xl font-semibold text-white">
          All Your Published Loans
        </h1>
      </header>
      {loans ? (
        <section className=" w-full h-full p-1 lg:p-3 xl:p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 overflow-auto gap-2 md:gap-3 lg:gap-5">
          {loans?.map((card: Tloansfromdb) => (
            <LoanCard
              lenderid={card.lenderid}
              loan_id={card.loan_id}
              expiry_date={card.expiry_date}
              instalment={card.instalment}
              interest_rate={card.interest_rate}
              months={card.months}
              principal_offer={card.principal_offer}
              purpose={card.purpose}
              title={card.title}
              total_due={card.total_due}
              date_posted={card.date_posted}
              key={card.loan_id}
              lenderName={card.lenderName}
              lender_credit_score={card.lender_credit_score}
              number_of_applicants={card.number_of_applicants}
            />
          ))}
        </section>
      ) : (
        <section>No loans yet!</section>
      )}
    </div>
  );
};

export default AllLoansPage;
