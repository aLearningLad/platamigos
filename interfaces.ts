import { ChangeEvent, SetStateAction } from "react";

export interface Icreateleft {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  purpose: string;
  setPurpose: React.Dispatch<React.SetStateAction<string>>;
}

export interface Inavcompbtn {
  uniqueLink: string;
  linkName: string;
  compImg: React.ReactElement;
}
