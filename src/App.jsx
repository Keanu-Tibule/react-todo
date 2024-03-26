import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Custom Components
import CustomForm from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task);
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Adventurer's Quest List</h1>
        </header>
        <CustomForm addTask={addTask}/>
      </div>
    </>
  )
}

export default App
