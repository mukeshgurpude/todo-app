import { CssBaseline, Stack, Tab, TabPanel, Tabs, Typography } from '@mui/material';
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
  const [input, setInput] = useState('');

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

  return <>
    <CssBaseline />
    <Stack m='0 auto' width='max-content'>
      <Typography variant="h1">#todo</Typography>
      <Tabs value={filter} onChange={(e, value) => setFilter(value)}>
        <Tab label="All" value="all"/>
        <Tab label="Active" value="active"/>
        <Tab label="Completed" value="completed"/>
      </Tabs>
      <Editor addTask={add_task}></Editor>
      <TaskList value="all" tasks={tasks} filter={filter} />
    </Stack>
  </>;
}

export default App;
