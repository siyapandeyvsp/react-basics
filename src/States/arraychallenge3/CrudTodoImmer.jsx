import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import { customAlphabet } from "nanoid";
import { useImmer } from "use-immer";

const initialTodos = [];

export default function CrudTodoImmer() {
  const nanoid = customAlphabet("0123456789", 4);

  const [todos, updateTodos] = useImmer(initialTodos);

  //   function handleAddTodo(title) {
  //     upDateTodos((draft) => {
  //       draft.push({
  //         id: nanoid(),
  //         title: title,
  //         done: false,
  //       });
  //     });
  //   }

  function handleAddTodo(title) {
    updateTodos((draft) => {
      draft.push({
        id: nanoid(),
        title: title,
        done: false,
      });
    });
  }

  //   function handleChangeTodo(nextTodo) {
  //     const todo = todos.find((t) => t.id === nextTodo.id);
  //     todo.title = nextTodo.title;
  //     todo.done = nextTodo.done;
  //   }
  function handleChangeTodo(nextTodo) {
    updateTodos((draft) => {
      const todo = draft.find((t) => t.id === nextTodo.id);
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
    });
  }

  //   function handleDeleteTodo(todoId) {
  //     const index = todos.findIndex((t) => t.id === todoId);
  //     todos.splice(index, 1);
  //   }
  function handleDeleteTodo(todoId) {
    updateTodos((draft) => {
      const index = draft.findIndex((t) => t.id === todoId);
      draft.splice(index, 1);
    });
  }

  return (
    <div className="m-5 p-5 shadow-lg rounded-lg border-2">
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
