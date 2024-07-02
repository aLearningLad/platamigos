"use client";

import { Tloansfromdb } from "@/types";
import { getAllApplied } from "@/utils/myFxns/getAllApplied";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const LDApplied = () => {
  const [allApplied, setAllApplied] = useState<any>();
  const [loanid, setLoanid] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const supabase = createClient();
      try {
        const googleid = (await supabase.auth.getUser()).data.user?.id;
        const data = await getAllApplied();

        const { data: appliedLoan, error: appliedLoanError } = await supabase
          .from("homefeed")
          .select("&")
          .eq("loan_id", data);

        console.log("This is all applied: ", allApplied);

        setAllApplied(appliedLoan);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className=" flex w-1/2 flex-col text-white relative">
      <header className=" w-full flex justify-center py-2">
        <h1 className=" text-lg ">Loan {"You've"} Applied For</h1>
      </header>
      <div className=" w-full h-full  ">
        {allApplied && allApplied.length > 0 ? (
          <div className="flex flex-col w-full h-full overflow-auto text-white">
            {allApplied[0].title}
          </div>
        ) : (
          <div className=" w-full h-full flex justify-center items-center bg-blue-950/60 rounded-2xl ">
            <p className=" text-xl font-semibold text-neutral-200 ">
              You haven't applied for anything yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LDApplied;
