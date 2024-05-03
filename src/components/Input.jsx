import React from "react";

const Input = ({ name, value,type, onChange ,className}) => {
  return (
    
      <input
        className={`border-2 rounded-lg border-blue-400 p-2 m-2 ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    
  );
};

export default Input;
