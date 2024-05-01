import React from "react";
import CartoonsGallery from "./CartoonsGallery";
import QueuingStateUpdates from "./QueuingStateUpdates";
import RequestCounter from "./RequestCounter"
import StateForm from "./StateForm"
const ShowStates = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      UseState in React
      <CartoonsGallery />
      <p>Queuing a series of state updates </p>
      <QueuingStateUpdates />
      <p>
        <b>Challenge 1 of 2:</b> Fix a request counter You’re working on an art
        marketplace app that lets the user submit multiple orders for an art
        item at the same time. Each time the user presses the “Buy” button, the
        “Pending” counter should increase by one. After three seconds, the
        “Pending” counter should decrease, and the “Completed” counter should
        increase. However, the “Pending” counter does not behave as intended.
        When you press “Buy”, it decreases to -1 (which should not be
        possible!). And if you click fast twice, both counters seem to behave
        unpredictably. Why does this happen? Fix both counters.
      </p>
      <RequestCounter/>
     <p>FORM </p>
     <StateForm/>
    </div>
  );
};

export default ShowStates;
