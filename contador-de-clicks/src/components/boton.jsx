// import React from "react";
import '../stylesheets/boton.css';

function Boton({texto, btnClick, manejarClick}) {
  return (
    <button className={btnClick ? 'btn-click' : 'btn-reiniciar'}
    onClick={manejarClick} >
      {texto}
    </button>
  )
}







export default Boton;