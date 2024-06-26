import { Profile } from "./Profile";
// Challenge 1 of 3: Extract a component 
// This Gallery component contains some very similar markup for two profiles.Extract a Profile component out of it to reduce the duplication.You’ll need to choose what props to pass to it.

// export default function Gallery() {
//     return (
//         <div>
//             <h1>Notable Scientists</h1>
//             <section className="profile">
//                 <h2>Maria Skłodowska-Curie</h2>
//                 <img
//                     className="avatar"
//                     src={getImageUrl('szV5sdG')}
//                     alt="Maria Skłodowska-Curie"
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         physicist and chemist
//                     </li>
//                     <li>
//                         <b>Awards: 4 </b>
//                         (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         polonium (chemical element)
//                     </li>
//                 </ul>
//             </section>
//             <section className="profile">
//                 <h2>Katsuko Saruhashi</h2>
//                 <img
//                     className="avatar"
//                     src={getImageUrl('YfeOqp2')}
//                     alt="Katsuko Saruhashi"
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         geochemist
//                     </li>
//                     <li>
//                         <b>Awards: 2 </b>
//                         (Miyake Prize for geochemistry, Tanaka Prize)
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         a method for measuring carbon dioxide in seawater
//                     </li>
//                 </ul>
//             </section>
//         </div>
//     );
// }


export default function Gallery() {
    return (
        <div>
            <h1 className="font-bold p-5 pb-0 text-lg">Notable Scientists</h1>
            <Profile
                person={{
                    imageId: "szV5sdG",
                    name: "Maria Skłodowska-Curie",
                    profession: "physicist and chemist",
                    discovery: "polonium (chemical element)",
                    awards: [
                        'Nobel Prize in Physics',
                        'Nobel Prize in Chemistry',
                        'Davy Medal',
                        'Matteucci Medal'
                    ]
                }} />

<Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />

        </div>
    );
}