import create from "zustand";
import { db, firebase } from "services/firebase";

export const useAuth = create((set) => {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user === null) return set({ isLoading: false, currentUser: null });
    const currentUserData = await db.collection("users").doc(user.uid).get();
    set({ isLoading: false, currentUser: currentUserData });
  });
  return {
    isLoading: true,
    currentUser: null,
    signIn: (email, password) => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    signUp: (name, cpf, telefone, email, password, type = "common") => {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          db.collection("users")
            .doc(cpf)
            .set({ name, cpf, telefone, email, type });
        });
    },
  };
});
