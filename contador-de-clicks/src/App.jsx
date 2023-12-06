import { useState } from 'react';
import './App.css';
import Boton from './components/boton';
import Contador from './components/Contador';

import bart from './assets/bart.png';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = ()=> {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = ()=> {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className="logo-contenedor">
        <img className='logo-app' 
        src={bart} 
        alt="Logo de la app" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>
        <Boton 
        texto='Click'
        btnClick={true}
        manejarClick={manejarClick}/>
        <Boton 
        texto='Reiniciar'
        btnClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  )
}

export default App
