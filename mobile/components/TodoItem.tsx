import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

interface TodoItemProps {
  id: string;
  todoText: string;
  completed: boolean;
  onEdit: (id: string, updates: { todoText?: string; completed?: boolean }) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, todoText, completed, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todoText);

  const handleSave = () => {
    if (value.trim()) {
      onEdit(id, { todoText: value.trim() });
    }
    setIsEditing(false);
  };

  return (
    <View style={[styles.item, completed && styles.completed]}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          onBlur={handleSave}
          onSubmitEditing={handleSave}
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={() => onEdit(id, { completed: !completed })} style={{ flex: 1 }}>
          <Text style={[styles.text, completed && styles.textCompleted]}>
            {todoText}
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => setIsEditing(true)}>
        <Ionicons name="create-outline" size={20} color="#007AFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDelete(id)}>
        <Ionicons name="trash-outline" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
    color: "#000",
  },
  completed: {
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    paddingVertical: 2,
  },
});

export default TodoItem;
