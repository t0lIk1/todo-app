// App.tsx
import { Space, Spin, Typography } from "antd"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useTodos } from "./hooks/useTodos"

const { Title } = Typography;

const App = () => {
  const { todos, loading, addTodo, removeTodo, editTodo } = useTodos();

  if (loading) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Spin size="large" />
    </div>
  );
}
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 24,
        background: "#f0f2f5",
      }}
    >
      <Space
        direction="vertical"
        style={{ width: "100%", maxWidth: 600 }}
      >
        <Title style={{ textAlign: "center" }}>My Todo List</Title>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          editTodo={editTodo}
          onDelete={removeTodo}
        />
      </Space>
    </div>
  );
};

export default App;
