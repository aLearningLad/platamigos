"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const LDBorrowed = () => {
  const [borrowed, setBorrowed] = useState();

  useEffect(() => {
    const getBorrowed = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;
      try {
        const { data: borrowedData, error: borrowedDataError } = await supabase
          .from("granted_loans")
          .select("*")
          .eq("applicant_id", googleid);
        console.log(borrowedData);

        if (borrowedDataError) {
          throw new Error(borrowedDataError.details);
        }
      } catch (error) {
        console.log("Error retrieving borrowing data: ", error);
      }
    };

    getBorrowed();
  }, []);

  return (
    <div className=" flex w-1/2 border-4 border-white p-3 flex-col">
      Everything you've borrowed!
    </div>
  );
};

export default LDBorrowed;
