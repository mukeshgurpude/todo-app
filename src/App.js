import { CssBaseline, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import TaskList from './components/list.jsx'
import Editor from './components/editor.jsx';

const TASK_KEY = 'tasks';

function App() {
  const [ tasks, setTasks] = useState(
    localStorage.getItem(TASK_KEY) 
    ? JSON.parse(localStorage.getItem(TASK_KEY))
    : {count: 0, tasks: []}
  );
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  }, [tasks])

  function add_task(value) {
    setTasks({
      count: tasks.count + 1,
      tasks: [...tasks.tasks, {
        id: tasks.count + 1,
        text: value,
        done: false
      }]
    })
  }
  function toggle_task(id, completed) {
    setTasks({
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

  return <>
    <CssBaseline />
    <Stack m='0 auto' width='max-content'>
      <Typography variant="h1">#todo</Typography>
      <Tabs value={filter} onChange={(e, value) => setFilter(value)}>
        <Tab value="all">all</Tab>
        <Tab label="Active" value="active"/>
        <Tab label="Completed" value="completed"/>
      </Tabs>
      <Editor addTask={add_task}></Editor>
      <TaskList value="all" tasks={tasks} filter={filter} toggleTask={toggle_task} />
    </Stack>
  </>;
}

export default App;
