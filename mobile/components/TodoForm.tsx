import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
