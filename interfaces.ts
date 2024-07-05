import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { TcreateLoanParams, TinterestStates, Tloansfromdb } from "./types";

export interface Ildapplied {
  isLoading: boolean;
  allApplied: any;
}

export interface Ilddisbursed {
  isDisbursedLoading: boolean;
  disbursed: any;
}

export interface IapplyModalBtn {
  loan_id: string;
}

export interface Idisbursedcard {
  index: number;
  applicant_name: string;
  total_due: number;
}

export interface Istore {
  modalToApply: boolean;
  setModalToApply: () => void;
  loandata: Tloansfromdb | null;
  setLoanData: (loandata: Tloansfromdb) => void;
  isLoading: boolean;
  setIsLoading: (currentState: boolean) => void;
  noIssue: boolean | null;
  setNoIssue: (newStatus: boolean) => void;
  currentHub: string;
  setCurrentHub: (hubname: string) => void;
  showMobileOptionsModal: boolean;
  setMobileOptionsModal: (newState: boolean) => void;
}

export interface Ihubbtn {
  hubName: string;
}

export interface Iminitab {
  tabId: number;
  tabIcon: React.ReactElement;
  tabLabel: string;
  tabData: number | string;
}

export interface Iloancard {
  loanid: string;
}

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
