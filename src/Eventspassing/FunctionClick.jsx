import React from "react";

const FunctionClick = ({message , children , event}) => {
    const handleClick=()=>{
        console.log('hi')
        alert(message)

    }
  return (
    <div>
      <button className= " m-5 p-5 rounded-lg bg-blue-600 text-white text-2xl font-bold hover:bg-blue-400  "
      onClick={e=>{e.stopPropagation();event();}}
      >
       {children}
      </button>
    </div>
  );
};

export default FunctionClick;
