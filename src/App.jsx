
import './App.css'
import Phrases from './components/Phrases'
import CardFrases from './components/CardFrases'
import phrases from './data/phrases.json'
import { useState } from 'react'





function App() {
  const fondos = [ 

    "url(/fondo1.png)", 
    "url(/fondo2.png)",
    "url(/fondo3.png)",
    "url(/fondo4.png)", 
    "url(/fondo5.jpg)", 
    "url(/fondo6.jpg)",
    "url(/fondo7.jpg)",
    "url(/fondo8.jpg)", 
    "url(/fondo9.jpg)",
    "url(/fondo10.jpg)",
    "url(/fondo11.jpg)", 
    "url(/fondo12.jpg)",
    "url(/fondo13.jpg)",
    "url(/fondo14.jpg)", 
    "url(/fondo15.jpg)"    
  ] 
  
  const [ index, setIndex ] = useState( 0 )
  const changeFrases = () => { 
    if( index === (phrases.length - 1 ) ){   
    setIndex( 0 )
     }else{
    setIndex( index + 1 )
    }
  }  
  
  return (
    <div className="App card" style={{backgroundImage: fondos[index]}}> 
      
      <CardFrases />        
      <Phrases dataFrases={ phrases[index] }  />      
      <button  onClick={ changeFrases } > Probar mi suerte </button>
    </div>
  )
}

export default App
