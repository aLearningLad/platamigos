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
    <section className="w-full h-[70vh] md:h-[65vh] lg:h-full lg:w-1/2 flex flex-col items-center justify-around p-1 md:p-2 lg:p-4 xl:p-7 border-2 border-white bg-gradient-to-br from-cyan-800/50 via-black to-black">
      {/* TITLE */}
      <div className=" w-full h-full flex flex-col items-start ">
        <label htmlFor="title">Loan Title</label>
        <input type="text" className="inputField" />
      </div>

      {/* PURPOSE */}

      {/* INTEREST RATE */}

      {/* PRINCIPLE AMOUNT */}

      {/* INSTALMENT AMOUNT */}

      {/* TOTAL DUE */}
    </section>
  );
};

export default CreateLeft;
