import { useEffect, useState } from "react"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api"

export interface ITodo {
  _id: string;
  todoText: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchTodos();
}, []);


  const addTodo = async (text: string) => {
    const newTodo = await createTodo(text);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const editTodo = async (id: string, updates: { todoText?: string; completed?: boolean }) => {
    setTodos((prev) => prev.map((t) => (t._id === id ? { ...t, ...updates } : t)));
    try {
      const updated = await updateTodo(id, updates);
      setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      console.error("Failed to update:", err);
    }
  };

  const removeTodo = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };

  return { todos, loading, addTodo, editTodo, removeTodo };
};
