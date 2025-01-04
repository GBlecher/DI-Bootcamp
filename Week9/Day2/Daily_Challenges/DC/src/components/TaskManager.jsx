import { useState } from "react";

const TaskManager = ({ onAdd }) => {
    const [task,setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(task)
        setTask('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={task}
            onChange={(e)=> setTask(e.target.value)} 
            placeholder="New Task"
            />
            <button type="submit">Add Task</button>
        </form>
    )

}

export default TaskManager