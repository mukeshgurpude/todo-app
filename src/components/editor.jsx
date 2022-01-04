import {useState} from 'react'
import { TextField, Button } from '@mui/material'

export default function Editor({addTask}) {
  const [name, setName] = useState('');
  const handleChange = e => setName(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    addTask(name);
    setName('')
  }

  return <form onSubmit={handleSubmit}>
    <TextField value={name} label="Task" onChange={handleChange} size='small' variant="filled" required/>
    <Button type="submit">Add</Button>
  </form>
}
