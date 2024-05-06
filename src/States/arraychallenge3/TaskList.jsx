import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Label from '../../components/Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <Input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <Button onClick={() => setIsEditing(false)}>
          Save
        </Button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <Button className="bg-amber-500" onClick={() => setIsEditing(true)}>
         <FontAwesomeIcon icon={faEdit}/>
        </Button>
      </>
    );
  }
  return (
    <Label>
      <Input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <Button className="bg-red-400" onClick={() => onDelete(todo.id)}>
      <FontAwesomeIcon icon={faTrash}/>
      </Button>
    </Label>
  );
}
