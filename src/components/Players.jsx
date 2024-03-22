import React from 'react'
import { FaUser } from "react-icons/fa";
import { useGetPlayers } from '../hooks/useGetPlayers';
import {useNavigate} from "react-router-dom"

function Players() {
  const navigate = useNavigate()
  // useEffect(()=>{
  //   const items = localStorage.getItem("palyers");

  //   const itemPlayers = JSON.parse(items);
  // },[])
  const items =localStorage.getItem("palyers")

  const itemPlayers= JSON.parse(items)

  console.log(itemPlayers);
  
  return (
    <>
      <h3 className="my-5 text-xl font-bold mx-5">Players List</h3>

      <div className="flex">
        <div className="flex  gap-5 mx-5 my-5">
          { 
            itemPlayers.map((player) => {
              return (
                <div>
                  <FaUser />
                  <h3>{player.name}</h3>
                  <h4>{player.basePrice}</h4>
                  <input type="radio"
                  id={player.name}
                  value={player.name}
                  name='player'

                  
                  />
                </div>
              );
            })
          }
        </div>

        <div>
          <button onClick={() => navigate("/add-player")}>ADD player</button>
        </div>
      </div>
    </>
  );
}

export default Players