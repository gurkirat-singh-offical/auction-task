import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Teams() {
 const [bidAmount , setBidAmount]= useState(0)
  const items = localStorage.getItem("teams");
  const navigate = useNavigate( )

  const itemTeams = JSON.parse(items);

  const handleChnage = (e)=>{
      setBidAmount(e.target.value);
  }

  console.log(itemTeams);
  return (
    <>
      <div>
        {itemTeams?itemTeams.map((team)=>{
          const newbal = Number(team.balance) - Number(bidAmount);
          return (
            <div
              className="flex
             justify-between gap-10"
            >
              <FaUser />
              <h3>{team.name}</h3>
              <h4>{newbal}</h4>
              <input
                type="number"
                placeholder="Enter bid amount "
                onChange={handleChnage}
              />
              <button disabled="disabled">Bid</button>
            </div>
          );
        }): <h1>no Teams </h1>}
        <button onClick={()=> navigate("/add-team")}>Add Team</button>
      </div>
      <div>
        <button disabled="disabled">All bid done
        </button>
        <h2>MSD sold to Team-1</h2>
      </div>

    </>
  );
}

export default Teams