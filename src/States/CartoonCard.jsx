import React from "react";
import { useState } from "react";
import { disneyCharacters } from "../data";
export const CartoonCard = () => {
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < disneyCharacters.length - 1;
  const handlePrevClick = () => {
    if (hasPrev) setIndex(index - 1);
  };
  const handleNextClick = () => {
    if (hasNext) setIndex(index + 1);
  };

  let char = disneyCharacters[index];
  return (
    <div className=" sm:flex justify-center items-center">
    
      <button className="  w-96 sm:w-fit h-fit sm:m-5 py-3 sm:px-5 rounded-lg bg-blue-500 text-white hover:bg-blue-300 shadow-blue-200 shadow-xl disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
      onClick={handlePrevClick}
      disabled={!hasPrev}
      
      >
        Prev
      </button>
      <div className=" w-96 border-2 rounded-lg flex flex-col items-center justify-center shadow-xl">
        <img src={char.imageUrl} alt={char.name} className="w-44 h-44 m-2 " />
        <div className="p-5 mx-2 mb-2 text-center ">
          <p className="font-bold text-xl"> {char.name}</p>
          <p>{char.description}</p>
          <p>Debut year : {char.debutYear}</p>
        </div>
      </div>
      <button className="  w-96 sm:w-fit h-fit sm:m-5 py-3 px-5 rounded-lg bg-blue-500 text-white hover:bg-blue-300  shadow-blue-200 shadow-xl disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
     onClick={handleNextClick}
      disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default CartoonCard;
