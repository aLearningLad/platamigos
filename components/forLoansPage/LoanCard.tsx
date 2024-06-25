import React from "react";
import DeleteLoanBtn from "./DeleteLoanBtn";
import { Iloancard } from "@/interfaces";
import AcceptLoanBtn from "./AcceptLoanBtn";
import TrackedSymbol from "./TrackedSymbol";
import TrackLoanBtn from "./TrackLoanBtn";
import { serverGetGoogleDetails } from "@/utils/myFxns/serverGetGoogleDetails";
import Link from "next/link";
import { Tloansfromdb } from "@/types";

const LoanCard: React.FC<Tloansfromdb> = async ({
  expiry_date,
  instalment,
  interest_rate,
  loan_id,
  months,
  principal_offer,
  purpose,
  title,
  total_due,
  date_posted,
  lenderName,
  lender_credit_score,
  number_of_applicants,
}) => {
  const result: any = await serverGetGoogleDetails();
  const watcher_id: string = result.user.id;

  return (
    <div className="w-full h-[60vh] lg:h-[75vh] bg-white rounded-md py-2 md:py-3 lg:py-5 px-2 lg:px-4 md:rounded-lg lg:rounded-xl xl:rounded-2xl flex items-center text-black flex-col text-center lg:text-start">
      <header className="w-full border-b-2 border-neutral-200 flex flex-col text-center lg:text-start">
        <h1 className="text-ellipsis font-semibold text-3xl lg:text-2xl text-black">
          {title}
        </h1>
        <p className="text-xl lg:text-[14px] text-neutral-800 ">{purpose}</p>
      </header>

      <section className=" mt-2 md:mt-4 lg:mt-5 flex flex-col items-start w-full">
        <h3 className=" text-[12px] font-semibold ">Amount Offered</h3>
        <h1 className=" text-3xl font-extrabold xl:text-5xl ">
          R{principal_offer}
        </h1>
        <p className=" text-[12px] font-semibold">@ {interest_rate}%</p>
        <p>over 4 {months} months</p>
      </section>

      <section className=" mt-2 lg:mt-5 flex flex-col w-full text-center lg:text-start">
        <h3 className=" text-lg font-semibold">Validity</h3>
        <p>This offer is due to expire on {expiry_date as string}</p>
      </section>

      <section className=" mt-2 lg:mt-4 flex flex-col text-center lg:text-start w-full">
        <div>
          <h2>Potential Returns</h2>
          <p>R{total_due}</p>
        </div>
        <div>
          <h2>Monthly return</h2>
          <p>R{instalment}</p>
        </div>
      </section>

      <section className=" w-full mt-2 flex flex-col gap-2 lg:gap-4">
        <div>Loan rating: A+</div>
        <div>Applicants: 223</div>
      </section>

      <DeleteLoanBtn loanid={loan_id} />

      {/* 
      <AcceptLoanBtn loanId={loanid} />
      <TrackedSymbol />
      <TrackLoanBtn loan_id={loanid} watcher_id={watcher_id} />
      <Link href={`/all/${loanid}`}>Tweak Offer</Link> */}
    </div>
  );
};

export default LoanCard;
