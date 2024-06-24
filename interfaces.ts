import { ChangeEvent, SetStateAction } from "react";
import { TcreateLoanParams, TinterestStates } from "./types";

export interface Ideleteloantbn {
  loanid: string;
}

export interface Icreateright {
  principle: number;
  interest: number;
  months: number;
  instalment: number;
  setInstalment: React.Dispatch<React.SetStateAction<number>>;
  setMonths: React.Dispatch<React.SetStateAction<number>>;
  interestValue: TinterestStates;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
  expiryDate: string;
  setExpiryDate: React.Dispatch<React.SetStateAction<string>>;
  createLoanFxn: (params: TcreateLoanParams) => void;
  loanParams: TcreateLoanParams;
  totalDue: number;
  setTotalDue: React.Dispatch<React.SetStateAction<number>>;
}

export interface Icreateleft {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  purpose: string;
  setPurpose: React.Dispatch<React.SetStateAction<string>>;
  principle: number;
  setPrinciple: React.Dispatch<React.SetStateAction<number>>;
  totalDue: number;
  interestValue: TinterestStates;
  setInterestValue: React.Dispatch<React.SetStateAction<TinterestStates>>;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
}

export interface Inavcompbtn {
  uniqueLink: string;
  linkName: string;
  compImg: React.ReactElement;
}
