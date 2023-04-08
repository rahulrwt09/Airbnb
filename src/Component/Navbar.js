import React from 'react'
import filterr from './img/filter.PNG'
function Navbar() {
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
  
  return (
    <>
    <div style={navbar}> 
    <div>
      <img src='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>frams</p>
    </div>
   
    <div>
      <img src='https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Lakefront</p>
    </div>
   
    <div>
      <img src='https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg
' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Breakfast</p>
    </div>
   
    <div>
      <img src='https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg
' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Mainsions</p>
    </div>
   
    <div>
      <img src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Beach</p>
    </div>
 
    <div>
      <img src='https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Tiny Homes</p>
    </div>
   
    <div>
      <img src='
    https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Private Room</p>
    </div>
   

    <div>
      <img src=' https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>OMG</p>
    </div>
   
    <div>
      <img src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Country Side</p>
    </div>
   
    <div>
      <img src='https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg
' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}>Historical Homes</p>
    </div>
   
    <div>
      <img src=' https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' alt='img' style={{ height: '25px', width: '25px' }}  />
      <p style={{marginTop:'2px'}}> Cabins</p>
    </div>
   
    <div>
      {<img src={filterr} alt='img' /* style={{ height: '25px', width: '25px' }}*/  /> }
     
    </div>
   
   
    {/* https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg
    
    https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg


    https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg

    https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg

    https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg

    https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg

    https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg

    https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg

    https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg

    https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg

    https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg

    https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg */}

    </div>
    </>
  )
}

export default Navbar