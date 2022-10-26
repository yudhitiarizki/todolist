import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHandlder, onEditHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHandlder(todo.id)}
        >
          Hapus
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "Batal" : "Selesai"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
