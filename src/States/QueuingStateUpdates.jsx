import React, { useState } from "react";
import Button from "../components/Button";

const QueuingStateUpdates = () => {
  const [number, setnumber] = useState(0);
  const [number2, setnumber2] = useState(0);
  return (
    <div className="">
<p>directly update as setState(number+1) thrice</p>
      <div className="flex justify-center items-center border-2 rounded-lg shadow-lg  py-3 px-5 m-5">
      <h1>{number}</h1>
      <Button
        onClick={() => {
          setnumber(number + 1);
          setnumber(number + 1);
          setnumber(number + 1);
        }}
      >
        +3
      </Button>
      </div>
      <p>using updater function n=>n+1 thrice</p>
      <div className="flex justify-center items-center border-2 rounded-lg shadow-lg  py-3 px-5 m-5">
     
      <h1>{number2}</h1>
      <Button
        onClick={() => {
          setnumber2(n=>n+1);
          setnumber2(n=>n+1);
          setnumber2(n=>n+1);
          
        }}
      >
        +3
      </Button>
      </div>
    </div>
  );
};

export default QueuingStateUpdates;
