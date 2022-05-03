const Button = ({ onAddTask, showAddTask }) => {
    return (
        <button id="button" className="button" onClick={onAddTask} style={{backgroundColor: showAddTask ? 'red' : 'green'}}>{showAddTask ? 'Close' : 'Add'}</button>
    )
}

export default Button