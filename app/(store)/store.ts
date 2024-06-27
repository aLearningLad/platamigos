import { Istore } from "@/interfaces";
import { create } from "zustand";

const useStore = create<Istore>((set) => ({
  // STATE VARIABLES
  modalToApply: false,

  // SETTERS
  setModalToApply: () =>
    set((state) => ({ modalToApply: !state.modalToApply })),
}));

export default useStore;
