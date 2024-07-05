"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import LDAll from "./LDAll";
import LDDisbursed from "./LDDisbursed";
import LDPending from "./LDPending";
import LDApplied from "./LDApplied";
import LDBorrowed from "./LDBorrowed";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/server";
import { getAllApplied } from "@/utils/myFxns/getAllApplied";
import { Tloansfromdb } from "@/types";

const LoanDisplay = () => {
  const currentHub = useStore((store: Istore) => store.currentHub);
  const [allApplied, setAllApplied] = useState<any>();
  const [loanid, setLoanid] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // FOR APPLIED
    const getData = async () => {
      const supabase = createClient();
      try {
        const googleid = (await supabase.auth.getUser()).data.user?.id;
        const data = await getAllApplied();

        const { data: appliedLoan, error: appliedLoanError } = await supabase
          .from("homefeed")
          .select("*")
          .eq("loan_id", data![0].loan_id);

        setLoanid(data![0].loan_id);

        console.log("This is all applied: ", appliedLoan);

        if (appliedLoan && appliedLoan?.length > 0) {
          setAllApplied(appliedLoan);
          setIsLoading(false);
        } else {
          setAllApplied(null);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  switch (currentHub) {
    case "all":
      return <LDAll />;

    case "disbursed":
      return <LDDisbursed />;

    case "borrowed":
      return <LDBorrowed />;

    case "pending":
      return <LDPending />;

    case "applied":
      return <LDApplied isLoading allApplied />;

    default:
      return (
        <div className=" flex w-1/2 border-4 border-white">
          This is all loans
        </div>
      );
  }
};

export default LoanDisplay;
