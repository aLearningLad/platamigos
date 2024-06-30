import { Istore } from "@/interfaces";
import { Tloansfromdb } from "@/types";
import { create } from "zustand";

const useStore = create<Istore>((set) => ({
  // STATE VARIABLES
  modalToApply: false,
  loandata: null,
  isLoading: true,
  noIssue: null,
  currentHub: "all",

  // ----------------------------> SETTERS <---------------------------------

  // SET CURRENTLY SELECTED HUB
  setCurrentHub: (hubname: string) => set((state) => ({ currentHub: hubname })),

  // SET ISSUE STATE THAT WILL DETERMINE IF ROUTER REFRESH SHOULD BE USED
  setNoIssue: (newStatus: boolean) => set((state) => ({ noIssue: newStatus })),

  // OPEN AND CLOSE APPLICATION MODAL
  setModalToApply: () =>
    set((state) => ({ modalToApply: !state.modalToApply })),

  // SET LOAN DATA RECIEVED FROM DATABASE ACCORDING TO TYPE
  setLoanData: (loandata: Tloansfromdb) =>
    set(() => ({
      loandata,
    })),

  // FOR LOADING STATE
  setIsLoading: (currentState: boolean) =>
    set((state) => ({ isLoading: currentState })),
}));

export default useStore;
