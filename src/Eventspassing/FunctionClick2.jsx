import React from "react";

const FunctionClick2 = ({message , children , event}) => {
    const handleClick=()=>{
        console.log('hi')
        alert(message)

    }
  return (
    <div>
      <button className= " m-5 p-5 rounded-lg bg-blue-600 text-white text-2xl font-bold hover:bg-blue-400  "
      onClick={event}
      >
       {children}
      </button>
    </div>
  );
};

export default FunctionClick2;
