import React, { useState } from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  updateTodo,
  deleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
      )}

      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
