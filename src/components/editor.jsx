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

  return <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center'}}>
    <TextField value={name} label="Task" onChange={handleChange} size='small' InputProps={{
      endAdornment: <Button type="submit" variant="contained" size="small">Add</Button>
    }} required/>
  </form>
}
