import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navigationbar';
import Carddatas from './Components/Carddata';



function App() {
  let [cartValue,setCartValue]=useState(0);
  return <>
   <Navbar cartValue={cartValue}/>

   <Carddatas setCartValue={setCartValue} />
   <div className='footer-content'>
   <footer className='foot'>
        
                contact us
                email : contactus@gmail.com
                phone : +91-9876543210
                
            </footer>
            </div>
  
   </>
}

export default App;
