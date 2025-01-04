import { useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import DatePicker from "./components/DatePicker";
import TaskDisplay from "./components/TaskDisplay";
import TaskManager from "./components/TaskManager";
import { addTask,editTask,deleteTask } from "./redux/actions";


function App(){
  const[selectedDate,setSelectedDate] = useState('2024-12-30')
  const dispatch = useDispatch()

  const tasks = useSelector((state) => state.tasks.tasks[selectedDate] || [])

  const handleAddTask = (task) => {
    dispatch(addTask(selectedDate,task))
  }
  const handleEditTask = (taskId) => {
    const newTask = prompt('Edit Task:',tasks[taskId])
    if (newTask){
      dispatch(editTask(selectedDate,taskId,newTask))
    }
  }
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(selectedDate,taskId))
  }
  return(
    
    <Provider store={store}>
      <div>
      <h1>Daily Planner</h1>
      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate}/>
      <TaskManager onAdd= {handleAddTask}/>
      <TaskDisplay 
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}/>
      </div>
    </Provider>
  )
}

export default App;