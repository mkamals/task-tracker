import { useState } from "react"

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add a task!!!')
            return
        }

        onAddTask({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-data">
                <label>Task Name:</label>
                <input type="text" placeholder="Enter task name" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-data">
                <label>Day&Time:</label>
                <input type="text" placeholder="Enter day & time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-data">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value={'Save Task'} className='button' />
        </form>
    )

}

export default AddTask