export type Tloanstoshow = any; //DEFINE LATER

export type TgrantedLoans = {
  applicant_id: string;
  lender_id: string;
  loan_id: string;
  principal_amount: number;
  date_granted: Date | string;
  applicant_name: string;
  total_due: number;
  interest_rate: number;
};

export type Tmobilenavdata = {
  linkID: number;
  linkname: string;
  linkref: string;
  icon: React.ReactElement;
};

export type TsubmitApplication = {
  loanid: string;
  posterid: string;
  expiry_date: Date | string;
  principal: number;
  interest_rate: number;
  purpose: string;
  instalment: number;
  total_due: number;
  months: number | null;
};

export type Tpending = {
  loanid: string;
  posterid: string;
  date_applied: Date | string;
  expiry_date: Date | string;
  principal: number;
  interest_rate: number;
  purpose: string;
  instalment: number;
  total_due: number;
  applicant_id: string;
  applicant_name: string;
  applicant_credit_score: number;
};

export type Ttodisburse = {
  loanid: string;
  userid: string;
  name_of_lender: string;
  date_posted: Date | string;
  expiry_date: Date | string;
  still_valid: boolean;
  principal_amount: number;
  interest_rate: number;
  purpose: string;
  term: number;
  link_to_sender_profile: string | null;
  granted_to: string;
  total_due: number;
  number_of_applicants: number;
};

export type Tdebttabdata = {
  tabid: number;
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  btnText: string;
};

export type IoverviewDisbursedData = {
  id: number;
  icon: React.ReactElement;
  figure: number | string;
  label: string;
  blurb: React.ReactElement;
};

export type TtrackedLoans = {
  watcher_id: string;
  loan_id: string;
};

export type Tloansfromdb = {
  lenderid: string;
  lenderName?: string;
  title: string;
  purpose: string;
  date_posted?: string;
  expiry_date: string | Date;
  number_of_applicants?: number;
  lender_credit_score?: number;
  interest_rate: number;
  principal_offer: number;
  instalment: number;
  total_due: number;
  months: number;
  loan_id: string;
  index?: number;
};

export type Tfootersocialsdata = {
  id: number;
  socialtitle: string;
  socialImg: React.ReactElement;
};

export type TinterestStates = {
  unitValue: number;
  decimalValue: number;
};

export type TfetchCurrentUserParams = {
  googleId: string;
};

export type TcreateLoanParams = {
  lenderName?: string;
  title: string;
  purpose: string;
  date_posted?: string;
  expiry_date: string | Date;
  number_of_applicants?: number;
  lender_credit_score?: number;
  interest_rate: number;
  principal_offer: number;
  instalment: number;
  total_due: number;
  months: number;
};

export type TlowerSBdata = {
  btnId: number;
  btnName: string;
  btnFxn?: () => void;
  btnLink?: string;
  btnIcon: React.ReactElement | string;
};

export type Tnavdata = {
  linkId: number;
  linkname: string;
  linkref: string;
  icon: React.ReactElement;
};
