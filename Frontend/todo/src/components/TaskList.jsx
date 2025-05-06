import React from 'react'

const TaskList = ({ tasks, onDelete, onEdit, onToggle }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer', }}
                        onClick={() => onToggle(task)}>
                        {task.title}
                    </span>

                    <button onClick={() => onEdit(task)}>Edit</button>
                    <button onClick={() => onDelete(task._id)}>Delete</button>

                </li>
            ))}
        </ul>
    )
}

export default TaskList