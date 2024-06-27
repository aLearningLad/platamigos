import { TsubmitApplication } from "@/types";
import { createClient } from "../supabase/client";
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

  try {
    const { error: submitApplicationError } = await supabase
      .from("pending")
      .insert({
        loanid: params.loanid,
        posterid: params.posterid,
        date_applied: new Date(),
        expiry_date: params.expiry_date,
        principal: params.principal,
        interest_rate: params.interest_rate,
        purpose: params.purpose,
        instalment: params.instalment,
        total_due: params.total_due,
        applicant_id: googleid,
      });

    if (submitApplicationError) {
      throw new Error(submitApplicationError.details);
    }
  } catch (error) {
    console.log("Error while applying for loan: ", error);
  }
};
