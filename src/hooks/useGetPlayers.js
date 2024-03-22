import { collection, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/config"
import { useEffect, useState } from "react"
import { useAddPlayer } from "./useAddPlayer";

export const useGetPlayers=()=>
{
    const [GetPlayers, SetGetPlayers] = useState([]);

    const{addPlayer} = useAddPlayer()

    const{status}= addPlayer

    


    
    const collections = collection(db,"Players")

    const getPlayers= async ()=>{
        let unsuscribe;
        try {
           const Query = query(collections,where("status","==", status),orderBy("createdAt")); 

           unsuscribe = onSnapshot(Query, (snapshot) => {
             let docs = [];
             snapshot.forEach((doc) => {
               const data = doc.data();
               const id = doc.id;

               docs.push({ ...data, id });
             });
             SetGetPlayers(docs);
             console.log(GetPlayers);
           });


        }catch (error) {
            console.log("error");
        }
        return ()=> unsuscribe()
    }

    useEffect(()=>{
        getPlayers()
    },[])

    return { GetPlayers };
    
}