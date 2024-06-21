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
