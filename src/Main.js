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
  const css= {
   border:'1px solid balck',
   display: 'grid',
   gridTemplateColumns: 'repeat(4, 1fr)',
   gridTemplateRows: 'repeat(4, 1fr)',
   gridGap: '7px',
   paddingLeft:'20px',
   paddingTop:'20px'
  }
  const subcss={
    height:'250px',
    width:'280px',
    
  }
  const imgcss= {
  backgroundSize:'cover',
  width: '100%',
  height:' 100%',
  borderRadius:'5%',
  }
  console.log(data);
  return (
    <>
    <div style={css} >
    {data.map(el=>(
     <div style={subcss}>
      <img src={el.image} style={imgcss}/>
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