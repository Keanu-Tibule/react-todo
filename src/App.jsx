import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Custom Components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id)); 
  }

  const toggleTask = (id) => {
    setTask(prevState => prevState.map(t => (t.id == id ? {...t, checked: !t.checked} : t)))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (t.id == task.id ? {...t, name: task.name} : t)))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Adventurer's Quest List</h1>
        </header>
        {
          isEditing && (
            <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
            />
          )
        }
        
        <CustomForm addTask={addTask}/>
        {tasks && (
          <TaskList 
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        )}
      </div>
    </>
  )
}

export default App
