import { getImageUrl } from "../utils";


export const Profile = ({ person }) => {
    return (
        <section className=" m-5  flex flex-col w-96 profile border border-teal-950 p-5 rounded-lg">
            <h2 className="font-bold">{person.name}</h2>
            <img
                className="avatar rounded-full"
                src={getImageUrl(person.imageId)}
                alt={person.name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {person.profession}
                </li>
                <li>
                    <b>Awards: {person.awards.length} </b>
                    ({person.awards.join(" , ")}  )          </li>
                <li>
                    <b>Discovered: </b>
                    {person.discovery}
                </li>
            </ul>
        </section>
    )
}