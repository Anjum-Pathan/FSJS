import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      const newTodo = {
        id: new Date().getTime(),
        text: todoText,
        completed: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setTodoText("");
    }
  };

  const handleToggleTodo = (todoId) => {
    dispatch({ type: "TOGGLE_TODO", payload: todoId });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({ type: "DELETE_TODO", payload: todoId });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
