import { Checkbox, Button, List } from "antd";

interface TodoItemProps {
  id: string;
  todoText: string;
  completed: boolean;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, todoText, completed, onToggle, onDelete }: TodoItemProps) => (
  <List.Item
    actions={[
      <Button danger onClick={() => onDelete(id)}>
        Delete
      </Button>,
    ]}
  >
    <Checkbox
      checked={completed}
      onChange={(e) => onToggle(id, e.target.checked)}
    >
      {todoText}
    </Checkbox>
  </List.Item>
);

export default TodoItem;
