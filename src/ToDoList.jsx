import React, { useState } from "react";

function ToDoList() {
  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");

  function handleChangeInput(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleDeleteTask(index) {
    const updateTask = tasks.filter((element, i) => i !== index);
    setTasks(updateTask);
  }

  function handleMoveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks)
    }
  }

  function handleMoveTaskDown(index) {
    if (index < tasks.length - 1) {
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index + 1]] = [
          updateTasks[index + 1],
          updateTasks[index],
        ];
        setTasks(updateTasks)
      }
  }

  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <div>
        <input
          className="todo_in"
          type="text"
          value={newTask}
          onChange={handleChangeInput}
          placeholder="Enter the task"
          name=""
          id="input"
        />
        <button className="todo_add_btn todo_btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ol className="ulist">
        {tasks.map((tasks, index) => (
          <li className="li" key={index}>
            <span className="text">{tasks}</span>
            <button
              className="todo_delete_btn todo_btn"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
            <button
              className="todo_up_btn todo_btn"
              onClick={() => handleMoveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="todo_down_btn todo_btn"
              onClick={() => handleMoveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
