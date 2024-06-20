"use client";

import { Icreateright } from "@/interfaces";
import { ChangeEvent, useEffect, useState } from "react";

const CreateRight: React.FC<Icreateright> = ({
  instalment,
  interest,
  months,
  principle,
  setInstalment,
  setMonths,
  interestValue,
  setInterestRate,
  expiryDate,
  setExpiryDate,
  createLoanFxn,
}) => {
  const instalmentAmount = Number(
    (
      (principle + principle * (interest / 100) * (months / 12)) /
      months
    ).toFixed(2)
  );

  const totalRepayment = instalmentAmount * months;

  useEffect(() => {
    setInterestRate(
      Number(interestValue.unitValue + interestValue.decimalValue / 10)
    );
  }, [interestValue]);

  return (
    <section className="w-full h-[70vh] md:h-[65vh] lg:h-full lg:w-1/2 flex flex-col items-center justify-around p-1 md:p-2 lg:p-4 xl:p-7">
      {/* MONTHS TO REPAY */}
      <div className="w-full h-[15vh] lg:h-[20%] flex flex-col lg:flex-row items-start px-2 lg:px-5 py-1 lg:py-2">
        <section className=" w-full flex flex-col h-full items-start">
          <h3 className="text-white text-[28px] lg:text-xl mb-3 font-semibold flex items-center gap-1">
            Repayments
          </h3>
          <label className="labelStyles" htmlFor="months">
            Months
          </label>
          <div className=" h-[40%] w-full md:w-10/12 lg:w-6/12 xl:w-4/12 ">
            <input
              type="number"
              className="numberInput"
              min={3}
              max={12}
              value={months}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMonths(Number(e.target.value))
              }
            />
          </div>
        </section>
        <section className="w-full items-start flex flex-col h-full">
          <h3 className="text-white text-[28px] lg:text-xl mb-3 font-semibold flex items-center gap-1">
            Application Deadline
          </h3>

          <label className="labelStyles" htmlFor="months">
            Date
          </label>
          <div className=" h-[40%] w-full md:w-10/12">
            <input
              type="text"
              className="inputField"
              min={3}
              max={12}
              value={expiryDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setExpiryDate(e.target.value)
              }
              placeholder="eg. 2024-06-28"
            />
          </div>
        </section>
      </div>

      {/* INSTALMENT AMOUNT */}

      <div className="w-full h-[20vh] lg:h-[30%] border-2 border-neutral-400/20 flex flex-col items-center text-center text-white justify-center bg-gradient-to-br from-purple-800/40 via-black to-black rounded-lg md:rounded-xl xl:rounded-2xl">
        <h3 className=" text-xl lg:text-lg">Borrower will pay you</h3>

        <h1 className=" text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-fuchsia-400 bg-clip-text text-transparent">
          R{instalmentAmount.toFixed(2)}
          {/* R233.33 */}
        </h1>

        <h1 className="text-xl lg:text-lg">every month for {months} months</h1>
      </div>

      {/* TOTAL DUE */}

      <section className=" w-full flex flex-col h-[30%] items-center rounded-lg md:rounded-xl xl:rounded-2xl justify-center bg-gradient-to-bl border-2 border-neutral-400/20 from-pink-400/20 via-black to-black">
        <div className="w-full h-fit p-1 lg:p-2 flex justify-center items-center gap-1">
          <p className=" text-neutral-200 text-[16px] lg:text-[14px]">
            est. repayment
          </p>
          <h2 className=" text-3xl lg:text-2xl text-white font-semibold">
            R{totalRepayment.toFixed(2)}
          </h2>
        </div>
        <span className=" w-full flex flex-row items-center gap-1 justify-center">
          <p className=" text-[10px] text-white italic">you're offering</p>
          <p className=" text-[12px] text-white font-semibold italic">
            R{principle}
          </p>
          <p className=" text-[8px] text-white">@</p>
          <p className=" text-[10px] text-white font-semibold italic">
            {interest}%
          </p>
          <p className=" text-[10px] text-white italic">for {months} months</p>
        </span>
        <button className=" w-full mt-2 md:w-10/12 py-1 lg:py-2 bg-gradient-to-r rounded-md md:rounded-lg from-purple-600/40 via-cyan-600 to-cyan-800 text-white text-3xl  lg:text-2xl ">
          Publish
        </button>
      </section>
    </section>
  );
};

export default CreateRight;
