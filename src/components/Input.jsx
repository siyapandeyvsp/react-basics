import React from "react";

const Input = ({ name, value, onChange }) => {
  return (
    
      <input
        className="border-2 rounded-lg border-blue-400 p-2 m-2"
        name={name}
        value={value}
        onChange={onChange}
      />
    
  );
};

export default Input;
