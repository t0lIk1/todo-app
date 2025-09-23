import { StyleSheet, Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useTodos } from "./hooks/useTodos"

export default function App() {
  const { todos, loading, addTodo, editTodo, removeTodo } = useTodos();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Todo App</Text>

        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onEdit={editTodo} onDelete={removeTodo} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  syncBtn: {
    alignSelf: "center",
    marginBottom: 15,
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  syncText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
