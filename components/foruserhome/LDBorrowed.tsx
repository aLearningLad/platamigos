"use client";

import { TgrantedLoans } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import BorrowedCard from "./BorrowedCard";

const LDBorrowed = () => {
  const [borrowed, setBorrowed] = useState<TgrantedLoans[] | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBorrowed = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;
      try {
        const { data: borrowedData, error: borrowedDataError } = await supabase
          .from("granted_loans")
          .select("*")
          .eq("applicant_id", googleid);

        if (borrowedData && borrowedData?.length > 0) {
          setBorrowed(borrowedData!);
          setIsLoading(false);
          console.log(borrowedData![0]);
        } else {
          setBorrowed(null);
          setIsLoading(false);
        }

        if (borrowedDataError) {
          throw new Error(borrowedDataError.details);
        }
      } catch (error) {
        console.log("Error retrieving borrowing data: ", error);
      }
    };

    getBorrowed();
  }, []);

  if (isLoading) {
    return (
      <div className=" w-full h-full flex justify-center items-center">
        <h2 className=" text-lg">Loading...</h2>
      </div>
    );
  }

  return (
    <div className=" flex w-1/2 border-4 border-white p-3 flex-col overflow-auto gap-7">
      {borrowed?.map((loan) => (
        <BorrowedCard />
      ))}
    </div>
  );
};

export default LDBorrowed;
