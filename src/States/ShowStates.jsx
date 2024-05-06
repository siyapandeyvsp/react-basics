import React from "react";
import CartoonsGallery from "./CartoonsGallery";
import QueuingStateUpdates from "./QueuingStateUpdates";
import RequestCounter from "./RequestCounter";
import StateForm from "./StateForm";
import NestedObject from "./NestedObject";
import NestedObjectImmer from "./NestedObjectImmer";
import Challenge1 from "./Challenge1";
import ArrayState from "./ArrayState";
import ShoppingCart from "./ShoppingCart";
import CrudTodoList from "./arraychallenge3/CrudTodoList";
import CrudTodoImmer from "./arraychallenge3/CrudTodoImmer";
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
      <RequestCounter />
      <p>FORM </p>
      <StateForm />
      <p>Practice Upating a nested object </p>
      <NestedObject />
      <p>Updating nested object using Immer Library </p>
      <NestedObjectImmer />
      <Challenge1 />
      <ArrayState />
      <p>
        <b>Challenge 1 of 4: Update an item in the shopping cart </b>
        Fill in the handleIncreaseClick logic so that pressing ”+” increases the
        corresponding number:
      </p>
      <p>
        <b>Challenge 2 of 4: Remove an item from the shopping cart</b> This
        shopping cart has a working ”+” button, but the ”–” button doesn’t do
        anything. You need to add an event handler to it so that pressing it
        decreases the count of the corresponding product. If you press ”–” when
        the count is 1, the product should automatically get removed from the
        cart. Make sure it never shows 0.{" "}
      </p>
      <ShoppingCart />
      <p>
        <b> Challenge 3 of 4: Fix the mutations using non-mutative methods</b>
        In this example, all of the event handlers in App.js use mutation. As a
        result, editing and deleting todos doesn’t work. Rewrite handleAddTodo,
        handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:
      </p>
      
      <CrudTodoList />
      <p>
        <b>Challenge 4 of 4: Fix the mutations using Immer </b>This is the same example
        as in the previous challenge. This time, fix the mutations by using
        Immer.you need
        to change the todos state variable to use it.
      </p>
      <CrudTodoImmer/>
    </div>
  );
};

export default ShowStates;
