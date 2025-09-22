import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Checkbox, Input, List, Tooltip } from "antd"
import { useState } from "react"

interface TodoItemProps {
  id: string;
  todoText: string;
  completed: boolean;
  editTodo: (id: string, updates: { todoText?: string; completed?: boolean }) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, todoText, completed, onDelete, editTodo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todoText);

  const handleSave = () => {
    const trimmed = value.trim();
    if (trimmed) {
      editTodo(id, { todoText: trimmed });
    }
    setIsEditing(false);
  };

  const handleToggle = (checked: boolean) => {
    editTodo(id, { completed: checked });
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <List.Item
      actions={[
        isEditing ? (
          <Tooltip title="Save" key="save">
            <Button type="primary" shape="circle" icon={<SaveOutlined />} onClick={handleSave} />
          </Tooltip>
        ) : (
          <Tooltip title="Edit" key="edit">
            <Button shape="circle" icon={<EditOutlined />} onClick={() => setIsEditing(true)} />
          </Tooltip>
        ),
        <Tooltip title="Delete" key="delete">
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={handleDelete} />
        </Tooltip>,
      ]}
      style={{
        background: completed ? "#f5f5f5" : "white",
        transition: "all 0.2s",
        wordBreak: "break-word",
        whiteSpace: "normal",
      }}
    >
      {isEditing ? (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onPressEnter={handleSave}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <Checkbox checked={completed} onChange={(e) => handleToggle(e.target.checked)}>
          <span
            style={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "gray" : "inherit",
            }}
          >
            {todoText}
          </span>
        </Checkbox>
      )}
    </List.Item>
  );
};

export default TodoItem;
