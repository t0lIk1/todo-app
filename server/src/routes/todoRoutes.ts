import { Router } from 'express';
import { getAllTodos, deleteTodo, createTodo, updateTodo } from '../controller/todoController';
const router = Router();

// Example route
router.get("/", getAllTodos)
router.post("/", createTodo)
router.delete("/:id", deleteTodo)
router.put("/:id", updateTodo)


export default router;
