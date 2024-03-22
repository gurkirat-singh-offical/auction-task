import React, { useId, useState } from 'react'
import { useAddPlayer } from '../hooks/useAddPlayer'
import { useNavigate } from 'react-router-dom'

function AddPlayer() {
  const navigate = useNavigate()

  const id = useId()
  const[name, setName]=useState("")
  const[age,setAge]=useState(0)
  const[place,setPlace]=useState("")
  const[basePrice,setBasePrice]= useState(0)

  
  const players={
    name,
    age,
    place,
    basePrice,
    id
  }

  
  localStorage.getItem("palyers" );


  const handleOnsubmit =(e)=>{
    e.preventDefault();
    const item = players;
    const stote = JSON.parse(localStorage.getItem("palyers"));
    let store2;
    if(stote){
       store2 = [...stote, item];
    }
    else{
      store2 =[item]
    }

    
    localStorage.setItem("palyers", JSON.stringify(store2));
    navigate("/");
  }
  return (
    <div className="">
      <h2>Player Detail Form</h2>
      <form onSubmit={handleOnsubmit} className="mx-10 text-2xl">
        <label htmlFor="PlayerName">Name</label>
        <br />
        <input
          type="text"
          id="PlayerName"
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200 p-1"
        />{" "}
        <br />
        <label htmlFor="PlayerAge">Age</label> <br />
        <input
          type="number"
          id="PlayerAge"
          onChange={(e) => setAge(e.target.value)}
          className="bg-gray-200 p-1"
        />{" "}
        <br />
        <label htmlFor="PlayerPlace">Place</label> <br />
        <input
          type="text"
          id="PlayerPlace"
          onChange={(e) => setPlace(e.target.value)}
          className="bg-gray-200 p-1"
        />{" "}
        <br />
        <label htmlFor="PlayerBasePrice">Base Price</label> <br />
        <input
          type="text"
          id="PlayerBasePrice"
          onChange={(e) => setBasePrice(e.target.value)}
          className="bg-gray-200 p-1"
        />{" "}
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default AddPlayer