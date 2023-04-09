import React from 'react'
import { useState, useEffect } from 'react'
function Main() {
  const [data,setdata]=useState([])
  useEffect(()=>{
     fetch(`http://localhost:3000/hotels`)
     .then(response=>response.json())
     .then(data=>setdata(data))
     .catch(err=>console.error(err))
  },[])
  console.log(data);
  return (
    <>
    <div >
    {data.map(el=>(
     <div>
      <img src={el.image}/>
      <p>{el.name}</p>
      <p>{el.location}</p>
      <p>{el.rating }</p>
      

     </div>
     
    ))}
    </div>
    </>
  )
}

export default Main