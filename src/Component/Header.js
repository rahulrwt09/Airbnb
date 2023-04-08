import React from 'react'
import logo from './img/logo.PNG';
import logomiddle from './img/middle.PNG'
import lastlogo from './img/lastlogo.PNG'
const Header =()=>{
//-------------- css here-----------------------------------//

const head= {
 

     display:'flex',
     flexDirection:'row',
     justifyContent:'space-around',
     height:'10vh',
     alignItems: 'center',
     marginLeft:'-50px',
     marginRight:'-50px'
}
const logofirst={
      
}

//-------------------css------------------------------------//
  return (
    <>
    <div style={head} >


        <div style={logofirst}>
         <img src={logo} alt={logo}/>
        </div>
        

        <div >
        <img src={logomiddle} alt={logomiddle} />   
        </div>


          <div>
          <img src={lastlogo } alt={lastlogo } />
        </div>
    </div>
    </>

  )
}

export default Header