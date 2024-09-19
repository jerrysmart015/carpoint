import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './Component/Nav';


import Sec from './Component/Sec';
import Thir from './Component/Thir';
import Four from './Component/Four';
import Back from './Back';
import Last from './Component/Last';
import End from './Component/End';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='   overflow-hidden'>

    
    
    

        <Nav/>
        <Back/>
        <Sec/>
 
     
        
        <Thir/>
        <Four/>
        <Last/>
        <End/>
    
        
       
      
      
      </div>

        
    
     
    </>
  )
}

export default App
