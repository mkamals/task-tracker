const Task = ({ task, onDeleteTask, onToggleTask}) => {
    return (
        <div 
        className={`task ${task.reminder && 'reminder'}`} 
        onDoubleClick={() => onToggleTask(task.id)}>
        <h3>{task.text}
        <i onClick={() => onDeleteTask(task.id)} className="fa-solid fa-trash-can"></i>
        </h3>
        <p>{task.day}</p>
    </div>
    )
}

export default Task