"use client";

import { ChangeEvent, useState } from "react";

const CreateRight = () => {
  const [repaymentTerm, setRepaymentTerm] = useState<number>(3);

  const calculateInstalment = (
    principle: number,
    interest: number,
    months: number
  ) => {
    const answer =
      (principle + principle * (interest / 100) * (months / 12)) / months;

    alert(`This is the instalment amount: ${answer}`);
  };

  return (
    <section className="w-full h-[70vh] md:h-[65vh] lg:h-full lg:w-1/2 flex flex-col items-center justify-around p-1 md:p-2 lg:p-4 xl:p-7">
      {/* MONTHS TO REPAY */}
      <div className="w-full h-[15vh] lg:h-[20%] flex-col items-start px-2 lg:px-5 py-1 lg:py-2">
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
            value={repaymentTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRepaymentTerm(Number(e.target.value))
            }
          />
        </div>
      </div>

      {/* INSTALMENT AMOUNT */}

      <div className="w-full h-[20vh] lg:h-[30%] border-2 flex flex-col items-center text-center text-white justify-center">
        <h3 className=" text-xl lg:text-lg">Borrower will pay you</h3>

        <h1 className=" text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-fuchsia-400 bg-clip-text text-transparent">
          R233.33
        </h1>

        <h1 className="text-xl lg:text-lg">
          every month for {repaymentTerm} months
        </h1>
      </div>

      {/* TOTAL DUE */}

      <section className=" w-full flex flex-col h-[30%] items-center rounded-lg md:rounded-xl xl:rounded-2xl justify-center bg-gradient-to-bl border-2 border-neutral-400/20 from-pink-400/20 via-black to-black">
        <div className="w-full h-fit p-1 lg:p-2 flex justify-center items-center gap-1">
          <p className=" text-neutral-200 text-[16px] lg:text-[14px]">
            est. repayment
          </p>
          <h2 className=" text-3xl lg:text-2xl text-white font-semibold">
            R2399.44
          </h2>
        </div>
        <button className=" w-full md:w-10/12 py-1 lg:py-2 bg-gradient-to-r rounded-md md:rounded-lg from-purple-600/40 via-cyan-600 to-cyan-800 text-white text-3xl  lg:text-2xl ">
          Publish
        </button>
      </section>
    </section>
  );
};

export default CreateRight;
