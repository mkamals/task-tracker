import Task from "./Task"

const Tasks = ({ tasks, onDeleteTask, onToggleTask }) => {
    console.log(tasks);
    return (
        <div id="tasks" className="tasks">
           {tasks.map((task) => (
               <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />
           )  
           )}
        </div>
    )
}

export default Tasks