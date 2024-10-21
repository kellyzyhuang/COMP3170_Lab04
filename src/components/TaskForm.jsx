import { useState } from 'react';
import './TaskForm.css';  

export default function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName("");  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New task"
      />
      <button className="save-button" type="submit">Save</button>
    </form>
  );
}
