export class ToDoList 
{
    constructor()
    {
        this.tasks = []
        this.taskId = 1
    }
    addTask(task){
        const newTask = {id: this.taskId++, name: task, completed: false}
        this.tasks.push(newTask)
        console.log(`Task added: ${task}`);
        
    }
    markDone(taskId){
         let selectedTask = this.tasks.find(item => item.id === taskId)
        if(selectedTask){
            selectedTask.completed = true
            console.log(`Task completed: ${selectedTask.name}`);
        }
        else{
            console.log('Task not found');
            
        }

    }
    listTasks(){
        console.log(this.tasks);
    }
}




