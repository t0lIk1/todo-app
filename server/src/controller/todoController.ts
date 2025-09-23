import { Request, Response } from 'express';
import Todo from '../models/todoModel';

export const getAllTodos = async (req: Request, res: Response) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
    const { todoText } = req.body;
    if (!todoText) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const todo = new Todo({ todoText });
    await todo.save();
    res.status(201).json(todo);
};

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted', todo });
};

export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Id is required' });

    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json(todo);
};
