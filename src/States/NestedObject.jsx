import React, { useState } from "react";
import Label from "../components/Label";
import Input from "../components/Input";

const NestedObject = () => {
  const [person, setPerson] = useState({
    name: "Mickey Mouse",
    characteristics: {
      species: "Mouse",
      gender: "Male",
      occupation: "Actor",
      friends: ["Minnie Mouse", "Donald Duck", "Goofy"],
      enemies: ["Pete"],
      signature_outfit: "Red shorts, large yellow shoes, white gloves",
      personality: "Cheerful, optimistic, mischievous",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshX0J5jmfls6LnMkor8sMq3E_iakRWoWcCMhrF6yB_KPW4d6mOQvLISsTwP_w9OaCQj9wlQ",
    },
  });
  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };
  const handleSpeciesChange = (e) => {
    setPerson({
      ...person,
      characteristics: {
        ...person.characteristics,
        species: e.target.value,
      },
    });
  };
  const handleGenderChange = (e) => {
    setPerson({
      ...person,
      characteristics: {
        ...person.characteristics,
        gender: e.target.value,
      },
    });
  };
  const handleOccupationChange = (e) => {
    setPerson({
      ...person,
      characteristics: {
        ...person.characteristics,
        occupation: e.target.value,
      },
    });
  };
  return (
    <div className="m-2 p-5 border-2 border-blue-400 shadow-lg rounded-lg ">
    <div className="grid grid-cols-1 gap-2">
  <div>
    <Label>
      Name:
      <Input value={person.name} onChange={handleNameChange} />
    </Label>
  </div>
  <div>
    <Label>
      Species:
      <Input
        value={person.characteristics.species}
        onChange={handleSpeciesChange}
      />
    </Label>
  </div>
  <div>
    <Label>
      Gender:
      <Input
        value={person.characteristics.gender}
        onChange={handleGenderChange}
      />
    </Label>
  </div>
  <div>
    <Label>
      Occupation
      <Input
        value={person.characteristics.occupation}
        onChange={handleOccupationChange}
      />
    </Label>
  </div>
</div>

      <div className="  text-left flex flex-col  justify-center items-center  m-2 border-2 rounded-lg shadow-lg ">
        <p>Character Id</p>
        <img
          className="w-1/3  rounded-lg border-2 shadow-lg m-2 p-5 "
          src={person.characteristics.image}
          alt={person.name}
        />
        <p>Name :  {person.name}</p>
       <p> Species :  {person.characteristics.species}</p>
       
       <p> gender:  {person.characteristics.gender}</p>
       <p> occupation:  {person.characteristics.occupation}</p>
       <p> Friends :  {person.characteristics.friends.map(friend=><li>{friend}</li>)}</p>

      </div>
    </div>
  );
};

export default NestedObject;
