import { TsubmitApplication } from "@/types";
import { createClient } from "../supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useStore from "@/app/(store)/store";
import { Istore } from "@/interfaces";
// TO DO WITH THIS FXN
// 1. ADD LOAN TO pending TABLE
//
//
//TO DO FOR APPROVAL FXN
// 1. UPDATE LOAN STATUS TO DISBURSED IN homefeed TABLE
// 2. ADD LOAN VALUE TO total_disbursed OF ISSUER IN allusers TABLE
// 3. ADD LOAN TOTAL_DUE TO total_borrowed IN allusers TABLE
// 4. ADD LOAN TOTAL VALUE TO current_outstanding IN allusers TABLE
// 5. ADD LOAN TOTAL TO balance IN allusers TABLE
export const submitAppl = async (params: TsubmitApplication) => {
  const supabase = createClient();
  const googleid = (await supabase.auth.getUser()).data.user?.id;
  const applicant_name = (await supabase.auth.getUser()).data.user
    ?.user_metadata.username;
  const { data: applicant_credit_score, error: applicant_credit_scoreError } =
    await supabase.from("allusers").select("username").eq("googleid", googleid);
  const { data: creditScore, error: creditScoreError } = await supabase
    .from("homefeed")
    .select("creditscore")
    .eq("googleid", googleid);

  try {
    const { error: submitApplicationError } = await supabase
      .from("pending")
      .insert({
        loanid: params.loanid,
        posterid: params.posterid,
        date_applied: new Date(),
        expiry_date: params.expiry_date,
        principal: params.principal,
        interest_rate: params.interest_rate.toPrecision(2),
        purpose: params.purpose,
        instalment: params.instalment,
        total_due: params.total_due,
        applicant_id: googleid,
        applicant_name,
        applicant_credit_score: creditScore,
      });

    if (submitApplicationError) {
      throw new Error(submitApplicationError.details);
    }

    if (!submitApplicationError) {
      toast.success("Applied!");
    }
  } catch (error) {
    console.log("Error while applying for loan: ", error);
    return error;
  }
};
