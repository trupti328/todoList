import React, { useEffect, useState } from "react";
const TaskForm = ({ onAdd, onUpdate, editingTask }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
        } else {
            setTitle('');
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        if (editingTask) {
            onUpdate({ ...editingTask, title });
        } else {
            onAdd({ title });
        }
        setTitle('');
    };



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>

        </form>
    );
}

export default TaskForm;