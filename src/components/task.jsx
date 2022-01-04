import { useState } from 'react';
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'

export default function Task({task, toggleTask}) {
  const [completed, setCompleted] = useState(task.done);
  const handleChange = () => {
    setCompleted(!completed);
    toggleTask(task.id, !completed);
  };
  return <ListItem button onClick={handleChange}>
    <ListItemIcon>
      <Checkbox checked={completed} />
    </ListItemIcon>
    <ListItemText primary={task.text} />
  </ListItem>;
}
