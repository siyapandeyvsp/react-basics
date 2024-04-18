import React from 'react'
import { person , baseUrl} from '../data';
export default function TodoList() {
    // console.log(person)
    return (
      <div className="w-96 rounded-lg p-5"
      style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={baseUrl+person.imageId+person.imageSize+".jpg"}
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }