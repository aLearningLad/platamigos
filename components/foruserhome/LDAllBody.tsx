"use client";

import { Tloansfromdb, Tloanstoshow } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const LDAllBody = () => {
  const [homefeed, setHomeFeed] = useState<Tloansfromdb[] | null>();
  const [applied, setApplied] = useState<any[] | null>();
  const [grantedTo, setGrantedTo] = useState<any[] | null>();
  const [grantedBy, setGrantedBy] = useState<any[] | null>();
  const allLoans: any[] = [];
  const [loansToShow, setLoansToShow] = useState<any>([]);

  useEffect(() => {
    const getAllData = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;
      try {
        // CREATED BY USER
        const { data: homefeedData, error: homefeedError } = await supabase
          .from("homefeed")
          .select("*")
          .eq("lenderid", googleid);
        if (homefeedData && homefeedData.length > 0) {
          setHomeFeed(homefeedData);
        } else {
          setHomeFeed(null);
        }

        // APPLIED FOR BY USER
        const { data: appliedFor, error: appliedForError } = await supabase
          .from("pending")
          .select("*")
          .eq("applicant_id", googleid);
        console.log("applied for data: ", appliedFor);
        if (appliedFor && appliedFor.length > 0) {
          setApplied(appliedFor);
        } else {
          setApplied(null);
        }

        // GRANTED TO USER
        const { data: grantedToData, error: grantedToDataError } =
          await supabase
            .from("granted_loans")
            .select("*")
            .eq("applicant_id", googleid);
        if (grantedToData && grantedToData.length > 0) {
          setGrantedTo(grantedToData);
        } else {
          setGrantedTo(null);
        }

        // GRANTED BY USER
        const { data: grantedByData, error: grantedByDataError } =
          await supabase
            .from("granted_loans")
            .select("*")
            .eq("applicant_id", googleid);
        if (grantedByData && grantedByData.length > 0) {
          setGrantedBy(grantedByData);
        } else {
          setGrantedBy(null);
        }

        // ADD CHECKS USING IF STATEMENT TO ACCOUNT FOR POSSIBLE NULL VALUES
        if (homefeedData && homefeedData.length > 0) {
          allLoans.push(...homefeedData!);
        }

        // if (appliedFor && appliedFor.length > 0) {
        //   let updatedApplied: any[] = [];
        //   for (let aLoan of appliedFor) {
        //     let updatedLoan = { ...aLoan, APPLIED: "Yes" };
        //     updatedApplied.push(updatedLoan);
        //     allLoans.push(updatedLoan);
        //   }
        //   console.log("Marked loans: ", updatedApplied);

        //   // allLoans.push(...appliedFor!);
        // }

        if (appliedFor && appliedFor.length > 0) {
          let updatedApplied: any[] = [];
          for (let aLoan of appliedFor) {
            console.log("Original loan: ", aLoan); // Log each original loan for debugging
            let updatedLoan = { ...aLoan, APPLIED: "Yes" };
            updatedApplied.push(updatedLoan);
            allLoans.push(updatedLoan);
            console.log("single loan: ", aLoan);
          }
          console.log("Marked loans: ", updatedApplied);
        } else {
          console.log("appliedFor is empty or undefined");
        }

        if (grantedByData && grantedByData.length > 0) {
          allLoans.push(...grantedByData!);
        }

        if (grantedToData && grantedToData.length > 0) {
          allLoans.push(...grantedToData!);
        }
        // console.log("Array of loans here: ", ...allLoans);
        // console.log("Loans applied for: ", appliedFor);
        console.log("Marked loans: ", appliedFor);

        setLoansToShow(allLoans);
      } catch (error) {
        console.log(error);
      }
    };

    getAllData();
  }, []);

  return (
    <div className=" h-full w-full overflow-auto flex flex-col px-2 pt-3 pb-1 border-4 border-white ">
      {loansToShow.map((loan: Tloanstoshow) => (
        <div className=" text-white text-lg">This is a loan</div>
      ))}
    </div>
  );
};

export default LDAllBody;
