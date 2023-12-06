// import React from "react";
import '../stylesheets/contador.css'

function Contador({numClicks}) {
  return (
    <div className="contador">
      {numClicks}
    </div>
  )
}

export default Contador;