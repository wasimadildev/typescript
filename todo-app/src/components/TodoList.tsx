import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
