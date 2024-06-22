"use client";

import { ChangeEvent, useEffect, useState } from "react";
import CreateLeft from "./CreateLeft";
import CreateRight from "./CreateRight";
import { TcreateLoanParams, TinterestStates } from "@/types";
import { createLoan } from "@/utils/queries/createLoan";

const CreateLoanComp = () => {
  const [title, setTitle] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [principle, setPrinciple] = useState<number>(300);
  const [totalDue, setTotalDue] = useState<number>(0);
  const [interestValue, setInterestValue] = useState<TinterestStates>({
    unitValue: 11,
    decimalValue: 1,
  });
  const [interestRate, setInterestRate] = useState<number>(
    Number(interestValue.unitValue + interestValue.decimalValue / 10)
  );
  const [instalment, setInstalment] = useState<number>(4);
  const [repaymentTerm, setRepaymentTerm] = useState<number>(3);
  const [formattedDate, setFormattedDate] = useState<Date>();

  useEffect(() => {
    const handleExpiryDate = () => {
      const expDateToDb = new Date(expiryDate);
      setFormattedDate(expDateToDb);
      console.log(expDateToDb);
    };

    handleExpiryDate();
  }, [expiryDate]);

  const loanParams: TcreateLoanParams = {
    title,
    purpose,
    expiry_date: formattedDate as Date,
    total_due: totalDue,
    interest_rate: interestRate,
    instalment,
    principal_offer: principle,
    months: repaymentTerm,
  };

  return (
    <div className="flex-col flex justify-center items-center w-full min-h-fit lg:h-full py-3 lg:py-1">
      <header className=" w-full flex h-fit py-1 lg:py-4 justify-center items-center">
        <h1 className="text-4xl md:text-3xl lg:text-4xl text-white">
          Create an Offer
        </h1>
      </header>

      <div className=" flex flex-col lg:flex-row w-full h-fit lg:h-full items-center justify-center">
        <CreateLeft
          purpose={purpose}
          setPurpose={setPurpose}
          setTitle={setTitle}
          title={title}
          principle={principle}
          setPrinciple={setPrinciple}
          totalDue={totalDue}
          interestValue={interestValue}
          setInterestValue={setInterestValue}
          setInterestRate={setInterestRate}
        />
        <div className="w-[2px] lg:flex hidden h-[90%] bg-neutral-400/20 rounded-lg  " />
        <CreateRight
          loanParams={loanParams}
          instalment={instalment}
          interest={interestRate}
          months={repaymentTerm}
          setInstalment={setInstalment}
          setMonths={setRepaymentTerm}
          principle={principle}
          interestValue={interestValue}
          setInterestRate={setInterestRate}
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
          createLoanFxn={() => {
            createLoan(loanParams);
          }} //COME BACK TO FIX
          totalDue={totalDue}
          setTotalDue={setTotalDue}
        />
      </div>
    </div>
  );
};

export default CreateLoanComp;
