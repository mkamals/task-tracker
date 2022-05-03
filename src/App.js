import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import Button from './components/Button';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import AddTask from './AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data)
    }

    getTasks()
  }, [])

  //Fetch all data task
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //Fetch single data task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // On add task
  const onAddTask = async (task) => {
    console.log('received task-', task);
    const res  = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTasks([...tasks, data])
  }

  // On delete task
  const onDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // On toggle task reminder
  const onToggleTask = async (id) => {
    const toggleTask = await fetchTask(id)
    const updTask = {...toggleTask, reminder: !toggleTask.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, 
    { method: 'PUT',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(updTask)
  })
    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }


  return (
    <div className="container">
      <Header />
      <Button onAddTask={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAddTask={onAddTask}  />}
      {tasks && tasks.length > 0 ? <Tasks tasks={tasks} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask}/> : 'No task to display here'}
      <Footer />
    </div>
  );
}

export default App;
