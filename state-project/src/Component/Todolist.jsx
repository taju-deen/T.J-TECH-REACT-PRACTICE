import { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import './App.css'



function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add Todo
  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      date: new Date().toLocaleDateString(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Complete / Uncomplete Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  // Filter Todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  return (
    <div className="app">
      <div className="todo-container">

        {/* Header */}
        <div className="header">
          <div>
            <h1>My To-Do List</h1>
            <p>Stay organized and get things done.</p>
          </div>

          <button className="theme-btn">
            ☀
          </button>
        </div>

        {/* Input */}
        <div className="input-section">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
          />

          <button onClick={addTodo}>
            Add Task
          </button>
        </div>

        {/* Filters */}
        <div className="filters">

          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>

          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>

        </div>

        {/* Todo List */}
        <div className="todo-list">

          {filteredTodos.map((todo) => (

            <div
              className="todo-item"
              key={todo.id}
            >

              {/* Check Button */}
              <button
                className={
                  todo.completed
                    ? "check checked"
                    : "check"
                }
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed && <FaCheck />}
              </button>

              {/* Todo Text */}
              <div className="todo-content">

                <span
                  className={
                    todo.completed
                      ? "completed"
                      : ""
                  }
                >
                  {todo.text}
                </span>

                <small>
                  📅 {todo.date}
                </small>

              </div>

              {/* Delete Button */}
              <button
                className="delete"
                onClick={() => deleteTodo(todo.id)}
              >
                <FaTrash />
              </button>

            </div>
          ))}

          {/* Empty Message */}
          {filteredTodos.length === 0 && (
            <p className="empty-message">
              No tasks found.
            </p>
          )}

        </div>

        {/* Footer */}
        <div className="footer">

          <span>
            You have{" "}
            {
              todos.filter(
                (todo) => !todo.completed
              ).length
            }{" "}
            tasks left
          </span>

          <span>
            {
              todos.filter(
                (todo) => !todo.completed
              ).length
            }{" "}
            Active •{" "}
            {
              todos.filter(
                (todo) => todo.completed
              ).length
            }{" "}
            Completed
          </span>

        </div>

      </div>
    </div>
  );
}

export default App;