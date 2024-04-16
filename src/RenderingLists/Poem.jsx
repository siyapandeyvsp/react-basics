import { Fragment } from "react";
import { poem } from "../data";
export default function Poem() {
    return (
      <article className="w-96 m-5 p-5 border-4 border-blue-500 bg-blue-100 rounded-lg">
        {poem.lines.map((line, index) =>
          <Fragment key={index}>
            {index >0 &&<hr className="border-blue-500 border w-40"/>}
            <p>{line}</p>
          </Fragment>
        )}
      </article>
    );
  }