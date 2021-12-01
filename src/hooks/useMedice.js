import create from "zustand";
import { db } from "services/firebase";

export const useMedice = create((set) => {
  return {
    createMedicine: (name, code, description) => {
      return db.collection("medicine").add({ name, code, description });
    },
  };
});
