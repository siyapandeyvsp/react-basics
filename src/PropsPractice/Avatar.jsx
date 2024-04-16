import { getImageUrl } from "../utils";
export function Avatar({ person, size }) {
   let imageSize=size<90?'s':'b';
   console.log(imageSize)
  return (
    <img
      className="avatar rounded-full m-5"
      src={getImageUrl(person.imageId, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}