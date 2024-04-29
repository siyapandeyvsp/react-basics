import React from "react";
import FunctionClick from "./FunctionClick";
import Toolbar from "./Toolbar";
import FunctionClick2 from "./FunctionClick2";
import DefaultBehavior from "./DefaultBehavior";
import DefaultBehavior2 from "./DefaultBehavior2";

const EventPractice = () => {
  const playbutton = () => {alert("hi i am pummpiken")};

  return (
    <div>
    <p className="m-5">The first Toolbar does not use stopPropagation</p>
     <Toolbar>
        <FunctionClick2 message={"hi pumpkin"} event={playbutton} > pumpkin</FunctionClick2>
        <FunctionClick2 message={"hi tomato"} event={()=>{alert('hi i am tomato')}}>tomato</FunctionClick2>
      </Toolbar>
      <p className="m-5">The 2nd  Toolbar  uses stopPropagation</p>

      <Toolbar>
        <FunctionClick message={"hi pumpkin"} event={playbutton} > pumpkin</FunctionClick>
        <FunctionClick message={"hi tomato"} event={()=>{alert('hi i am tomato')}}>tomato</FunctionClick>
      </Toolbar>
     <p className="m-5"> shows default behavior i.e refresh page </p>
     <DefaultBehavior/>
     <p className="m-5"> prevents default behavior i.e not refresh page </p>
     <DefaultBehavior2/>
    </div>
  );
};

export default EventPractice;
