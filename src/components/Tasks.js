import Task from "./Task"

const Tasks = ({ tasks, onDeleteTask, onToggleTask }) => {
    return (
        <div>
           {tasks.map((task) => (
               <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />
           )  
           )}
        </div>
    )
}

export default Tasks