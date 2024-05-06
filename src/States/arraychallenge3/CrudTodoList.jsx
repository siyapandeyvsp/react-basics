import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import { customAlphabet } from 'nanoid';


const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function CrudTodoList() {
  const nanoid = customAlphabet('0123456789', 4);

  const [todos, setTodos] = useState(
    initialTodos
  );

  // function handleAddTodo(title) {
  //   todos.push({
  //     id: nextId++,
  //     title: title,
  //     done: false
  //   });
  // }
  function handleAddTodo(title) {
    setTodos(
      [
        {
          id: nanoid(),
          title: title,
          done: false
        },
        ...todos
       
      ]
    )
   
  }

  // function handleChangeTodo(nextTodo) {
  //   const todo = todos.find(t =>
  //     t.id === nextTodo.id
  //   );
  //   todo.title = nextTodo.title;
  //   todo.done = nextTodo.done;
  // }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map(todo=>{if(todo.id===nextTodo.id)return nextTodo; else return todo})
    )
  }

  // function handleDeleteTodo(todoId) {
  //   const index = todos.findIndex(t =>
  //     t.id === todoId
  //   );
  //   todos.splice(index, 1);
  // }
  function handleDeleteTodo(todoId) {
    
    setTodos(todos.filter(todo=>todo.id!==todoId))
  }

  return (
    <div className='m-5 p-5 shadow-lg rounded-lg border-2'>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
