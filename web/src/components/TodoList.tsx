import { List } from "antd"
import type ITodo from "../types/type"
import TodoItem from "./TodoItem"

interface TodoListProps {
  todos: ITodo[];
  editTodo: (id: string, updates: { todoText?: string; completed?: boolean }) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, editTodo, onDelete }: TodoListProps) => {
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
    return 0;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <List
      bordered
      dataSource={sortedTodos}
      renderItem={(todo) => (
        <TodoItem
          key={todo._id}
          id={todo._id}
          todoText={todo.todoText}
          completed={todo.completed}
          editTodo={editTodo}
          onDelete={onDelete}
        />
      )}
    />
  );
};

export default TodoList;
