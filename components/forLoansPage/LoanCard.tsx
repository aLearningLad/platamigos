import React from "react";
import DeleteLoanBtn from "./DeleteLoanBtn";
import { Iloancard } from "@/interfaces";
import AcceptLoanBtn from "./AcceptLoanBtn";
import TrackedSymbol from "./TrackedSymbol";
import TrackLoanBtn from "./TrackLoanBtn";
import { serverGetGoogleDetails } from "@/utils/myFxns/serverGetGoogleDetails";
import Link from "next/link";
import { Tloansfromdb } from "@/types";
import EditLoanBtn from "./EditLoanBtn";

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
    <div className="w-full hover:border-[8px] hover:border-cyan-600 hover:scale-95 transition-all duration-300 ease-in-out bg-gradient-to-br from-neutral-50 to bg-neutral-50/60 to-neutral-50/70 rounded-md py-2 md:py-3 lg:py-5 px-2 lg:px-4 md:rounded-lg lg:rounded-xl xl:rounded-2xl flex items-center text-black flex-col text-center lg:text-start">
      <header className="w-full border-b-2 border-neutral-200 flex flex-col text-center lg:text-start">
        <h1 className="text-ellipsis font-semibold text-3xl lg:text-2xl bg-gradient-to-r from-orange-400 to-fuchsia-700 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl lg:text-[14px] text-neutral-800 line-clamp-1 text-ellipsis">
          {purpose}
        </p>
      </header>

      <section className="mt-2 md:mt-4 lg:mt-5 flex flex-col items-start w-full">
        <h3 className="text-[12px] font-semibold">Amount Offered</h3>
        <h1 className="text-3xl font-extrabold xl:text-5xl bg-gradient-to-r from-orange-400 to-fuchsia-700 bg-clip-text text-transparent">
          R{principal_offer}
        </h1>
        <p className="text-[12px] font-semibold">@ {interest_rate}%</p>
        <p>over 5 {months} months</p>
      </section>

      <section className="mt-2 lg:mt-5 flex flex-col w-full text-center lg:text-start">
        <h3 className="text-lg font-semibold">Validity</h3>
        <p>This offer is due to expire on {expiry_date as string}</p>
      </section>

      <section className="mt-2 lg:mt-4 flex flex-col text-center lg:text-start w-full">
        <div>
          <h3 className="text-lg font-semibold">Potential Returns</h3>
          <p>R{total_due}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Monthly return</h3>
          <p>R{instalment}</p>
        </div>
      </section>

      <section className="w-full mt-2 flex flex-col gap-2 lg:gap-4">
        <span>
          Loan rating:
          <b className="text-2xl font-bold italic ml-1 text-green-600">A+</b>
        </span>
        <span>
          Applicants:
          <b className="text-2xl ml-1 font-bold italic">223</b>
        </span>
      </section>

      <DeleteLoanBtn loanid={loan_id} />
      <EditLoanBtn />

      {/* Uncomment these lines if needed
      <AcceptLoanBtn loanId={loan_id} />
      <TrackedSymbol />
      <TrackLoanBtn loan_id={loan_id} watcher_id={watcher_id} />
      <Link href={`/all/${loan_id}`}>Tweak Offer</Link> */}
    </div>
  );
};

export default LoanCard;
