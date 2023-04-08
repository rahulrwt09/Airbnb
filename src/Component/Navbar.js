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
      {
        data.map((el,id)=>(
        <div key={id}>
          <img src={el.img} style={{ height: '25px', width: '25px' }}/>
          <p style={{marginTop:'2px'}}>{el.p}</p>
         </div> 

        ))
      }
    <div>
<img src={filterr} alt='img'   /> 

</div>

    </div>
    </>
  )
}

export default Navbar