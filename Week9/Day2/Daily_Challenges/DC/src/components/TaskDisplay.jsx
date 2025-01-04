const TaskDisplay = ({tasks, onEdit, onDelete}) => {
    return (
        <div>
            {tasks.map((task,index)=>(
                <div key={{index}}>
                    <h3>{task}</h3>
                    <button onClick={()=> onEdit(index)}>Edit</button>
                    <button onClick={()=> onDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TaskDisplay