import { Button, Input, Space } from "antd";
import { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        placeholder="Enter your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPressEnter={handleAdd}
      />
      <Button type="primary" onClick={handleAdd}>
        Add Task
      </Button>
    </Space.Compact>
  );
};

export default TodoForm;
