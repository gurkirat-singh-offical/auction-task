import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const useAddTeam = () => {
  const collectionRef = collection(db, "Team");

  const addTeam = async ({ name,ownerName }) => {
    await addDoc(collectionRef, {
      name,
      ownerName,
      balance: 555,
      totalAmount: 150000,
      createdAt: serverTimestamp(),
    });
  };
  return { addTeam };
};
