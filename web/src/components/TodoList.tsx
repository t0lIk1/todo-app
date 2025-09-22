import { List } from "antd";
import TodoItem from "./TodoItem";
import type ITodo from "../types/type";

interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => (
  <List
    bordered
    dataSource={todos}
    renderItem={(todo) => (
      <TodoItem
        key={todo._id}
        id={todo._id}
        todoText={todo.todoText}
        completed={todo.completed}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    )}
  />
);

export default TodoList;
