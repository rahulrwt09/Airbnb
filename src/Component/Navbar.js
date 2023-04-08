import React, { useState } from 'react'
import filterr from './img/filter.PNG'
import { links } from './navdata'

function Navbar() {
  //--------------css----------------
    const navbar= {
        borderTop:'1px solid #e4e3e8',

        height:'10vh',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginLeft:'20px',
        marginRight:'20px',
        marginTop:'20px',
        paddingTop:'10px'
    }
   //-------------------css-------------
   const [data, setdata] =useState(links)
  
  return (
    <>
    <div style={navbar}> 
       
   

    </div>
    </>
  )
}

export default Navbar