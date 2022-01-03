export default function TaskList({tasks, filter}) {
  let filteredTasks = tasks;
  switch(filter) {
    case 'all':
      break;
    case 'active':
      filteredTasks = tasks.filter(task => !task.completed);
      break;
    case 'completed':
      filteredTasks = tasks.filter(task => task.completed);
  }
  return <>
    {filter}
  </>
}
