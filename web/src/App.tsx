import { useEffect, useState } from "react"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../services/api"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import type ITodo from "./types/type"

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const handleAdd = async (text: string) => {
    const newTodo = await createTodo(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggle = async (id: string, completed: boolean) => {
    const updated = await updateTodo(id, completed);
    setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)));
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;
