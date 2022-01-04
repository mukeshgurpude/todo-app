import {useState} from 'react'
import { TextField, Box, Button } from '@mui/material'

export default function Editor({addTask}) {
  const [name, setName] = useState('');
  const handleChange = e => setName(e.target.value);
  return <Box>
    <TextField value={name} onChange={handleChange} />
    <Button onClick={()=>addTask(name)}>Add</Button>
  </Box>
}
