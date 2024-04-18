import { people } from '../data';
import { getImageUrlss } from '../utils.js';
const Mapped=(Items)=>{
    // console.log(Items)
    const list=Items.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrlss(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
        )
        return list 
}
export default function Scientists() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrlss(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>

//   );
const listItems=Mapped(people)
  const chemists=Mapped(people.filter(person=>person.profession==='chemist'))
  const everyOneElse=Mapped(people.filter(person=>person.profession!=='chemist'))
  return (
    <article className=' p-5 m-5 w-96 border-4 border-gray-500 rounded-lg'>
      <h1 className='text-2xl font-bold text-center'>Scientists</h1>
      <ul>{listItems}</ul>
      <h1 className='text-2xl font-bold text-center'>Chemists</h1>
      <ul>{chemists}</ul>
      <h1 className='text-2xl font-bold text-center'>Everyone Else</h1>
      <ul>{everyOneElse}</ul>
    </article>
  );
}
