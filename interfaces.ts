import { ChangeEvent, SetStateAction } from "react";
import { TinterestStates } from "./types";

export interface Icreateright {
  principle: number;
  interest: number;
  months: number;
  instalment: number;
  setInstalment: React.Dispatch<React.SetStateAction<number>>;
  setMonths: React.Dispatch<React.SetStateAction<number>>;
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
}

export interface Inavcompbtn {
  uniqueLink: string;
  linkName: string;
  compImg: React.ReactElement;
}
