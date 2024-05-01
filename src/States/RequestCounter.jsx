import React, { useState } from "react";
import Button from "../components/Button";

const RequestCounter = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p=>p + 1);
    await delay(3000);
    setPending(p=>p - 1);
    setCompleted(c=>c+ 1);
  }

  return (
    <div className=" border-2 rounded-lg m-5 p-5 flex  flex-col justify-center items-center">
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <Button onClick={handleClick}>
        Buy     
      </Button>
    </div>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export default RequestCounter;
