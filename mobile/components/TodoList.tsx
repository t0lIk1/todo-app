import { FlatList } from "react-native"
import { ITodo } from "../hooks/useTodos"
import TodoItem from "./TodoItem"

interface Props {
  todos: ITodo[];
  onEdit: (id: string, updates: { todoText?: string; completed?: boolean }) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onEdit, onDelete }: Props) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TodoItem
          id={item._id}
          todoText={item.todoText}
          completed={item.completed}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    />
  );
}
