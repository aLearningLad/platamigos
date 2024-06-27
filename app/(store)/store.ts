import { Istore } from "@/interfaces";
import { Tloansfromdb } from "@/types";
import { create } from "zustand";

const useStore = create<Istore>((set) => ({
  // STATE VARIABLES
  modalToApply: false,
  loandata: null,

  // SETTERS
  setModalToApply: () =>
    set((state) => ({ modalToApply: !state.modalToApply })),
  setLoanData: (loandata: Tloansfromdb) =>
    set(() => ({
      loandata,
    })),
}));

export default useStore;
