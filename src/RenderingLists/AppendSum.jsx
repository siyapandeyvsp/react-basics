import React from "react";
import { Tabular } from "./Tabular";
const AppendSum = () => {
  const data = [
    { a: 2, b: 3 },
    { a: 5, b: 6 },
    { a: 8, b: 9 },
    { a: 11, b: 12 },
    { a: 14, b: 15 },
  ];

  console.log(data);
  const newData = data.map((item) => ({ ...item, c: item.a + item.b }));
  console.log("data", data, "\n", "newData", newData);
  // const oldData=data
  // console.log ("old data",oldData)
  // data.forEach((element,index)=>element.c=element.a+element.b)
  // console.log("updated data",data)
  //we dont use forEach as we dont want to modify the original data , create a new array and return it


  return (
    <div>
      Practice Question: Append the a key "c" as the sum of a and b for each
      object in the given array
      <Tabular data={data}  />
      <h1 className="p-5">NEW ARRAY </h1>
      <Tabular data={newData} />
    </div>
  );
};

export default AppendSum;
