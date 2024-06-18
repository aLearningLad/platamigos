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
    <section className="w-full h-[70vh] md:h-[65vh] lg:h-full lg:w-1/2 flex flex-col items-start justify-around p-1 md:p-2 lg:p-4 xl:p-7 border-2 border-white bg-gradient-to-br from-cyan-800/50 via-black to-black">
      <div className=" w-full flex flex-col">
        <h3 className=" text-white text-[28px] lg:text-xl mb-5 lg:mb-9 font-semibold">
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
        <h3 className=" text-white text-[28px] lg:text-xl mb-5 lg:mb-9 font-semibold">
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

      {/* INTEREST RATE */}
      <div className=" w-full flex flex-col">
        <h3 className=" text-white text-[28px] lg:text-xl mb-5 lg:mb-9">
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

      {/* PRINCIPLE AMOUNT */}

      {/* INSTALMENT AMOUNT */}

      {/* TOTAL DUE */}
    </section>
  );
};

export default CreateLeft;
