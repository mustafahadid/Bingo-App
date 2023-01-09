
import Confetti from "react-confetti";
import React from "react";
import "./Confeti.css"

import { useState, useEffect } from "react";


const Confeti=()=> {
  const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight})

  const detectSize =()=> {
    setWindowDimension({width : window.innerWidth, height: window.innerHeight})
  }

  useEffect(()=>{
    window.addEventListener('resize', detectSize)

    return()=>{
      window.removeEventListener('resize', detectSize)
    } 
  }, [windowDimension]);
  return (
    
      <div>
        <h3>Congratulations! </h3>
        <Confetti width={windowDimension.width} height={windowDimension.height} />
      </div>
  );
}

export default Confeti;
