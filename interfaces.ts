import { ChangeEvent, SetStateAction } from "react";

export interface Icreateright {
  principle: number;
  interest: number;
  months: number;
}

export interface Icreateleft {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  purpose: string;
  setPurpose: React.Dispatch<React.SetStateAction<string>>;
  principle: number;
  setPrinciple: React.Dispatch<React.SetStateAction<number>>;
}

export interface Inavcompbtn {
  uniqueLink: string;
  linkName: string;
  compImg: React.ReactElement;
}
