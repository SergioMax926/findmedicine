import create from "zustand";
import { db } from "services/firebase";

export const feedBack = create((set) => {
  return {
    useFeed: (cpf, description) => {
      return db.collection("feedbacks").doc(cpf).add({ cpf, description });
    },
  };
});