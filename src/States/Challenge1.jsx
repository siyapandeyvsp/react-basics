// import { useState } from 'react';

// export default function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: 'Ranjani',
//     lastName: 'Shettar',
//     score: 10,
//   });

//   function handlePlusClick() {
//     setPlayer({
//       ...player,
//       score: player.score + 1,
//     });
//   }

//   function handleFirstNameChange(e) {
//     setPlayer({
//       ...player,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPlayer({
//       ...player,
//       lastName: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>
//         {' '}
//         <button onClick={handlePlusClick}>
//           +1
//         </button>
//       </label>
//       <label>
//         First name:
//         <input
//           value={player.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={player.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//     </>
//   );
// }


import React from 'react'

import { useState } from 'react';
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';

export default function Challenge1() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
   setPlayer({
    ...player,
    score: player.score+1,
   } )
    
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
        ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
     <p>
        <b>Challenge 1 of 3: Fix incorrect state updates </b>
        This form has a few bugs. Click the button that increases the score a
        few times. Notice that it does not increase. Then edit the first name,
        and notice that the score has suddenly “caught up” with your changes.
        Finally, edit the last name, and notice that the score has disappeared
        completely. Your task is to fix all of these bugs. As you fix them,
        explain why each of them happens.
      </p>
      <Label>
        Score: <b>{player.score}</b>
        {' '}
        <Button onClick={handlePlusClick}>
          +1
        </Button>
      </Label>
      <Label>
        First name:
        <Input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </Label>
      <Label>
        Last name:
        <Input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </Label>
    </>
  );
}

