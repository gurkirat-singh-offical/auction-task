import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"

export const useAddPlayer = ()=>{
    const collectionRef = collection(db,"Players")
    const addPlayer = async ({name,age,place,basePrice,status})=>{
        await addDoc(collectionRef,{
            name,
            age,place,status,team:"",basePrice,
            createdAt : serverTimestamp()
        })
    }
    return{addPlayer}
}