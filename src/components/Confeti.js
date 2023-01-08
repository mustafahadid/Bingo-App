
import Confetti from "react-confetti";
import React from "react";
import "./Confeti.css"


const Confeti=()=> {

  return (
    
      <div>
        <h3>Congratulations! </h3>
        <Confetti numberOfPieces={150} width={1330} height={800} />
      </div>
  );
}

export default Confeti;