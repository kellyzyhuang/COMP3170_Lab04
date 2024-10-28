import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); 

  const addTask = (name) => {
    const newTask = {
      id: Date.now(),
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const filterTasks = (tasks) => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "pending") {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="planner">
      <h1>Daily Planner</h1>
      <TaskForm onAddTask={addTask} />
      <div className="filter-buttons">
        <button className="filter-button" onClick={() => setFilter("all")}>All</button>
        <button className="filter-button" onClick={() => setFilter("pending")}>Pending</button>
        <button className="filter-button" onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <h2>You have {remainingTasks} tasks remaining</h2>
      <div>
        {filterTasks(tasks).map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onRemove={removeTask}
            disabled={task.completed} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
