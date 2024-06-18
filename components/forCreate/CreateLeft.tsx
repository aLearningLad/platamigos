"use client";

import { useState } from "react";

const CreateLeft = () => {
  const [title, setTitle] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [interestRate, setInterestRate] = useState<number | null>(null);
  const [principle, setPrinciple] = useState<number | null>(null);
  const [instalment, setInstalment] = useState<number | null>(null);
  const [totalDue, setTotalDue] = useState<number | null>(null);

  return (
    <section className="w-full h-[70vh] md:h-[65vh] lg:h-full overflow-auto lg:w-1/2 flex flex-col items-start justify-around px-1 md:px-4 lg:px-8 xl:px-16 bg-gradient-to-br">
      <div className=" w-full flex flex-col">
        <h3 className=" text-white text-[28px] lg:text-xl mb-3 font-semibold">
          Loan details
        </h3>

        {/* TITLE */}
        <div className=" w-full h-full flex flex-col items-start ">
          <label className="labelStyles" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter a title for your loan"
            className="inputField"
          />
        </div>
      </div>

      {/* PURPOSE */}
      <div className=" w-full flex flex-col">
        <h3 className=" text-white text-[28px] lg:text-xl mb-3 font-semibold">
          About
        </h3>

        <div className=" w-full h-full flex flex-col items-start ">
          <label className="labelStyles" htmlFor="title">
            Additional Info on Offer
          </label>
          <textarea
            placeholder="Provide information on your loan offer"
            className="textarea"
          />
        </div>
      </div>

      {/* PRINCIPLE AMOUNT */}
      <div className=" w-full flex flex-col">
        <h3 className=" text-white text-[28px] lg:text-xl mb-5 lg:mb-9">
          Terms Configurations
        </h3>

        {/* Inputs */}
        <div className=" w-full h-full flex flex-col items-start">
          <label className="labelStyles" htmlFor="inputs">
            Principle Amount & Interest %
          </label>
          <section className=" w-full h-[30vh] border-2 border-white flex flex-col lg:flex-row gap-2 xl:gap-4 items-start ">
            <div className=" w-full h-[40%] border-2 border-neutral-400 rounded-md flex flex-col items-start px-1 md:px-2 lg:px-3 py-2 ">
              <label htmlFor="amount">Amount</label>
              <input type="slider" />
            </div>
            <div className=" w-full h-[40%] border-2 border-neutral-400 rounded-md "></div>
          </section>
        </div>
      </div>

      {/* INTEREST RATE */}

      {/* INSTALMENT AMOUNT */}

      {/* TOTAL DUE */}
    </section>
  );
};

export default CreateLeft;
