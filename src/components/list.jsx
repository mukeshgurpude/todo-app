import { List, Typography, Stack } from '@mui/material'
import Task from './task.jsx'

export default function TaskList({tasks, filter, toggleTask}) {
  let filteredTasks = tasks.tasks;
  switch(filter) {
    case 'all':
      break;
    case 'active':
      filteredTasks = tasks.tasks.filter(task => !task.done);
      break;
    case 'completed':
      filteredTasks = tasks.tasks.filter(task => task.done);
      break;
    default:
      filteredTasks = tasks.tasks;
  }

  return <>
    <Stack spacing={2}>
      <Typography variant="h3">{filter} Tasks</Typography>
      <Typography variant="h5">Count: {filteredTasks.length}</Typography>
      <List>
        {filteredTasks.map(task => <Task key={task.id} task={task} toggleTask={toggleTask} />)}
      </List>
    </Stack>
  </>
}
