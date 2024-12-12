import {ToDoList} from "./todo.js"

const newToDoList = new ToDoList()

newToDoList.addTask('Do laundry')

newToDoList.addTask('Buy milk')
newToDoList.addTask('Do homework')
newToDoList.listTasks()
newToDoList.markDone(2)
newToDoList.listTasks()
