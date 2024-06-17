export type TfetchCurrentUserParams = {
  googleId: string;
};

export type TcreateLoanParams = {
  lenderName: string;
  title: string;
  purpose: string;
  date_posted: Date;
  expiry_date: Date;
  number_of_applicants: number;
  lender_credit_score: number;
  interest_rate: number;
  principal_offer: number;
  instalment: number;
  total_due: number;
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
