import { Badge, Box, CssBaseline, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import TaskList from './components/list.jsx'
import Editor from './components/editor.jsx';

const TASK_KEY = 'tasks';

export function Label({text, num}) {
  return <Badge badgeContent={num} color="primary">
    <Typography variant="body2">{text}</Typography>
  </Badge>
}

function App() {
  const [ tasks, setTasks] = useState(
    localStorage.getItem(TASK_KEY) 
    ? JSON.parse(localStorage.getItem(TASK_KEY))
    : {count: 0, last: 0, tasks: []}
  );
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  }, [tasks])

  function add_task(value) {
    setTasks({
      count: tasks.count + 1,
      last: tasks.last + 1,
      tasks: [...tasks.tasks, {
        id: tasks.last + 1,
        text: value,
        done: false
      }]
    })
  }
  function toggle_task(id, completed) {
    setTasks({
      ...tasks,
      count: tasks.count,
      tasks: tasks.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            done: completed
          }
        }
        return task;
      })
    })
  }

  function remove_task(id) {
    setTasks({
      ...tasks,
      count: tasks.count - 1,
      tasks: tasks.tasks.filter(task => task.id !== id)
    })
  }
  function clear_completed() {
    const completed = tasks.tasks.filter(task => task.done);
    setTasks({
      ...tasks,
      count: tasks.count - completed.length,
      tasks: tasks.tasks.filter(task => !task.done)
    })
  }

  return <Box sx={{justifyContent: 'center', alignItems: 'center',display: 'flex',minHeight: '100vh'}}>
    <Paper elevation={7} sx={{maxWidth: 'max-content', padding: 2, textAlign: 'center'}}>
      <CssBaseline />
      <Stack m='0 auto' spacing={2} width='max-content'>
        <Typography variant="h3">#todo</Typography>
        <Tabs value={filter} onChange={(e, value) => setFilter(value)}>
          <Tab label={<Label text="All" num={tasks.count} />} value="all"/>
          <Tab label={<Label text="Active" num={tasks.tasks.filter(t => !t.done).length} />} value="active"/>
          <Tab label={<Label text="Completed" num={tasks.tasks.filter(t => t.done).length} />} value="completed"/>
        </Tabs>
        <Editor addTask={add_task}></Editor>
        <TaskList value="all" 
          tasks={tasks}
          filter={filter}
          toggleTask={toggle_task}
          clearCompleted={clear_completed}
          removeTask={remove_task}
        />
      </Stack>
    </Paper>
  </Box>
}

export default App;
