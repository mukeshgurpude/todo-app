import { useState } from 'react';
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Task({task, toggleTask, removeTask}) {
  const [completed, setCompleted] = useState(task.done);
  const handleChange = () => {
    setCompleted(!completed);
    toggleTask(task.id, !completed);
  };
  return <ListItem button>
    <ListItemIcon onClick={handleChange}>
      <Checkbox checked={completed} />
    </ListItemIcon>
    <ListItemText primary={task.text} onClick={handleChange}/>
    <ListItemIcon onClick={() => removeTask(task.id)}>
      <DeleteIcon color="alert"/>
    </ListItemIcon>
  </ListItem>;
}
