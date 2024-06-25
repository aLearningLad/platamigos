"use client";

import { useParams } from "next/navigation";

const AboutLoan = () => {
  const params = useParams();

  const { id } = params;

  return (
    <div className=" w-full h-full text-white text-2xl">
      Info on loan with id: {id}{" "}
    </div>
  );
};

export default AboutLoan;
