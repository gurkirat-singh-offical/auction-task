import React, { useState } from 'react'
import { useAddTeam } from '../hooks/useAddTeam'
import { useNavigate } from 'react-router-dom'

function AddTeam() {
  const navigate = useNavigate()
  const[name,setName]= useState("")
  const[ownerName ,setOwnerName]=useState("")
  

  const Teams ={
    name,
    ownerName,
    balance: "150000"
  }
  localStorage.getItem("teams");

  const handleSubmit =(e)=>{
    e.preventDefault()
    const item = Teams;
    const stote = JSON.parse(localStorage.getItem("teams"));

    let store2
    if (stote) {
      store2 = [...stote, item];
    } else {
      store2 = [item];
    }
    localStorage.setItem("teams", JSON.stringify(store2));
    navigate("/")
  }
  return (
    <div>
      <h2>Team Registraion form</h2>
      <form onSubmit={handleSubmit} className="mx-10 text-2xl">
        <label htmlFor="TeamName">Name</label>
        <input
          type="text"
          id="TeamName"
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200 p-1"
        />
        <label htmlFor="TeamOwnerName">OwnerName</label>
        <input
          type="text"
          id="TeamOwnerName"
          onChange={(e) => setOwnerName(e.target.value)}
          className="bg-gray-200 p-1"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddTeam