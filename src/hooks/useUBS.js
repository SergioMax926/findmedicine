import create from "zustand";
import { db } from "services/firebase";

export const useUbs = create((set) => {
  return {
    createUbs: (name, adress) => {
      return db.collection("ubs").add({ name, adress });
    },
  };
});
