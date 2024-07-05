"use client";

import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
import LDAll from "./LDAll";
import LDDisbursed from "./LDDisbursed";
import LDPending from "./LDPending";
import LDApplied from "./LDApplied";
import LDBorrowed from "./LDBorrowed";
import { useEffect, useState } from "react";
import { getAllApplied } from "@/utils/myFxns/getAllApplied";
import { createClient } from "@/utils/supabase/client";
import { TgrantedLoans, Tloansfromdb } from "@/types";
import { getGoogleDetailsClient } from "@/utils/myFxns/getGoogleDetailsClient";

const LoanDisplay = () => {
  const currentHub = useStore((store: Istore) => store.currentHub);
  const [allApplied, setAllApplied] = useState<any>();
  const [loanid, setLoanid] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [disbursed, setDisbursed] = useState<TgrantedLoans[] | null>();
  const [isDisbursedLoading, setIsDisbursedLoading] = useState<boolean>(true);
  const [borrowed, setBorrowed] = useState<TgrantedLoans[] | null>();
  const [isBorrowedLoading, setIsBorrowedLoading] = useState(true);
  const [userDP, setUserDP] = useState("");

  // STATES FOR LDALL
  const [homefeed, setHomeFeed] = useState<Tloansfromdb[] | null>();
  const [applied, setApplied] = useState<any[] | null>();
  const [grantedTo, setGrantedTo] = useState<any[] | null>();
  const [grantedBy, setGrantedBy] = useState<any[] | null>();
  const allLoans: any[] = [];
  const [loansToShow, setLoansToShow] = useState<any>([]);

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
          // setIsLoading(false);
        } else {
          setAllApplied(null);
          // setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    // FOR DISBURSED DATA
    const getDetails = async () => {
      const supabase = createClient();
      const googleid = (await supabase.auth.getUser()).data.user?.id;

      try {
        const { data: disbursedData, error: disbursedDataError } =
          await supabase
            .from("granted_loans")
            .select("*")
            .eq("lender_id", googleid);
        console.log(disbursedData);

        if (disbursedData && disbursedData.length > 0) {
          setDisbursed(disbursedData);
          setIsDisbursedLoading(false);
        } else {
          setDisbursed(null);
          setIsDisbursedLoading(false);
        }

        if (disbursedDataError) {
          throw new Error(disbursedDataError.details);
        }
      } catch (error) {
        console.log("Error while collecting disbursed loans: ", error);
      }
    };

    // FOR BORROWED
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
          setIsBorrowedLoading(false);
          console.log(borrowedData![0]);
        } else {
          setBorrowed(null);
          setIsBorrowedLoading(false);
        }

        if (borrowedDataError) {
          throw new Error(borrowedDataError.details);
        }
      } catch (error) {
        console.log("Error retrieving borrowing data: ", error);
      } finally {
        setIsBorrowedLoading(false);
      }
    };

    // FOR LDAllBody
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

    const getProfilePic = async () => {
      try {
        const result = await getGoogleDetailsClient();
        const googleProfilePic = result?.user_metadata.avatar_url;

        setUserDP(googleProfilePic);
      } catch (error) {
        console.log("Error getting profile picture: ", error);
      }
    };

    getProfilePic();
    getAllData();
    getBorrowed();
    getDetails();
    getData();
  }, []);

  switch (currentHub) {
    case "all":
      return (
        <LDAll allLoans={allLoans} loansToShow={loansToShow} userDP={userDP} />
      );

    case "disbursed":
      return (
        <LDDisbursed
          disbursed={disbursed}
          isDisbursedLoading={isDisbursedLoading}
        />
      );

    case "borrowed":
      return (
        <LDBorrowed borrowed={borrowed} isBorrowedLoading={isBorrowedLoading} />
      );

    case "pending":
      return <LDPending />;

    case "applied":
      return <LDApplied isLoading={isLoading} allApplied={allApplied} />;

    default:
      return (
        <div className=" flex w-1/2 border-4 border-white">
          This is all loans
        </div>
      );
  }
};

export default LoanDisplay;
