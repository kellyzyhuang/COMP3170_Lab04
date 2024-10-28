import './Task.css';

export default function Task({ task, onToggle, onRemove }) {
  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "none" }} className="task">
      <input
        className="checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        disabled={task.completed} 
      />
      {task.name}
      <button className="remove-button" onClick={() => onRemove(task.id)}>Remove</button>
    </div>
  );
}
