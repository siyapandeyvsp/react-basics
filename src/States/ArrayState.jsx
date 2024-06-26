import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faClose,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Label from "../components/Label";
import { customAlphabet } from 'nanoid';

export default function ArrayState() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [insertAt, setInsertAt] = useState(0);
  const [date,setDate]=useState(null);
  console.log(artists)
  const nanoid = customAlphabet('0123456789', 4);
  const handleLowerCase = () => {
    setArtists(
      artists.map((artist) => ({
        ...artist,
        name: artist.name.toLowerCase(),
      }))
    );
  };
  const handleUpperCase = () => {
    setArtists(
      artists.map((artist) => ({
        ...artist,
        name: artist.name.toUpperCase(),
      }))
    );
  };
  const handleReverseAll = () => {
    setArtists(
      artists.map((artist) => ({
        ...artist,
        name: artist.name.split("").reverse().join(""),
      }))
    );
  };

  const handleEditChange = (e, id) => {
    setArtists(
      artists.map((artist) =>
        artist.id === id ? { ...artist, name: e.target.value } : artist
      )
    );
  };
  const toggleEditMode = (id) => {
    setEditingId(id);
  };
  const handleExitEditMode = () => {
    setEditMode(!editMode);
    setEditingId(null);
  };

  const handleInvertList = ()=>{
    const newArray=[...artists]
    setArtists(newArray.reverse())
  }

const handleSortList=()=>{
    const newArray=[...artists]
    newArray.sort((a, b) => a.name.localeCompare(b.name));

    setArtists(newArray.sort())
}
const handleSortDate=()=>{
    const newArray=[...artists]
    newArray.sort((a, b) => a.date.localeCompare(b.date));

    setArtists(newArray.sort())
}
const handleSortId=()=>{
    const newArray=[...artists]
    newArray.sort((a, b) => a.id-b.id);

    setArtists(newArray.sort())
}
  return (
    <div className=" m-5 p-3 border-2 rounded-lg shadow-xl">
      <h1>Inspiring sculptors:</h1>
      <div className="flex flex-wrap justify-around  flex-col sm:flex-row">
        <Input
          className="w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Birthday
        <Input type="date" onChange={(e)=>setDate(e.target.value)}/>
         </Label>
        <Label>
          Insert At :
          <Input
            type="number"
            name="insertAt"
            value={insertAt}
            onChange={(e) => setInsertAt(e.target.value)}
          />
        </Label>
        <Button
          onClick={() => {
            setArtists([
              ...artists.slice(0,insertAt),
              {
                id: nanoid(),
                name: name,
                date:date
              },
              ...artists.slice(insertAt)
            ]);
          }}
        >
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </div>
      <Button onClick={()=>setArtists([])}>Clear All </Button>

      <ul>
        {artists.map((artist) => (
          <li
            className="flex border-2 rounded-lg shadow-lg  m-2 px-2 justify-between items-center"
            key={artist.id}
          >
            {editMode && editingId === artist.id ? (
              <Input
                value={artist.name}
                onChange={(e) => handleEditChange(e, artist.id)}
              />
            ) : (
              <div className="flex justify-between w-full ">
             <div>{artist.id}</div>
             <div >{ artist.name} </div>  
             <div>{artist.date}</div>
             </div>
            )}
            <div className="flex justify-between">
              {editingId !== artist.id ? (
                <Button
                  onClick={() => {
                    toggleEditMode(artist.id);
                    setEditMode(true);
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
              ) : (
                <Button className="bg-slate-500" onClick={handleExitEditMode}>
                  <FontAwesomeIcon icon={faClose} />
                </Button>
              )}
              <Button
                className="bg-red-400"
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>{" "}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-evenly flex-col sm:flex-row ">
        <Button className="bg-orange-400" onClick={handleLowerCase}>
          lowercase all
        </Button>
        <Button className="bg-green-800" onClick={handleUpperCase}>
          CAPITALISE ALL
        </Button>
        <Button
          className="bg-amber-300 text-red-600"
          onClick={handleReverseAll}
        >
          Reverse All
        </Button>
        <Button onClick={handleInvertList}>Invert List </Button>
        <Button onClick={handleSortList}>Sort By Name  </Button>
        <Button onClick={handleSortDate}>Sort By Date  </Button>
        <Button onClick={handleSortId}>Sort By id  </Button>
      </div>
    </div>
  );
}
