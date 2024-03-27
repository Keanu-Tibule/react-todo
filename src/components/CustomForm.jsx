import { useState } from 'react';
//Library Imports
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

const CustomForm = ({addTask}) => {
    const[task,setTask]= useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        });
        setTask("");
    }
    
    return (
        <form 
            className="todo"
            onSubmit={handleFormSubmit}
            >
            <div className="wrapper">
                <input 
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Add Quest"
                />
                <label 
                    htmlFor="task"
                    className="label"
                >Add Quest</label>
            </div>
            <button 
                className="btn"
                aria-label="Add Quest"
                type="submit"
                >
                <RocketLaunchIcon/>
            </button>
        </form>
    )
}
export default CustomForm