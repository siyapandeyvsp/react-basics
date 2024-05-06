import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <Input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</Button>
    </>
  )
}
