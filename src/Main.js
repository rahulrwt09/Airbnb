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
   paddingLeft:'50px',
   paddingTop:'20px'
  }
  const subcss={
    height:'380px',
    width:'280px',
   
    
  }
  const imgcss= {
  backgroundSize:'cover',
  width: '100%',
  height:'250px',
  borderRadius:'5%',
  }
  console.log(data);
  return (
    <>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />


    </head>
    <div style={css} >
    {data.map(el=>(
     <div style={subcss}>
      <img src={el.image} style={imgcss}/>
      <p>{<i class="fa-solid fa-hotel" style={{color:'#FF5A5F'}}></i>}{"-"}{el.name}</p>
      
      <p>{<i class="fa-solid fa-location-dot" style={{color:'#FF5A5F'}}></i>}{" "}{el.location}</p>
      <p>{<i class="fa-solid fa-star" style={{color:'#e3ac07'}}></i>}{" "}{el.rating }</p>
      

     </div>
     
    ))}
    </div>
    </>
  )
}

export default Main