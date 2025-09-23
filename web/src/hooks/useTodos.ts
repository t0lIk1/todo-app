import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../services/api';
import type ITodo from '../types/type';

export const useTodos = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				setLoading(true);
				const data = await getTodos();
				setTodos(data);
			} catch (error) {
				console.error('Failed to fetch todos:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchTodos();
	}, []);

	const addTodo = async (text: string) => {
		try {
			const newTodo = await createTodo(text);
			setTodos(prev => [newTodo, ...prev]);
		} catch (error) {
			console.error('Failed to add todo:', error);
		}
	};

	const editTodo = async (id: string, updates: Partial<ITodo>) => {
		setTodos(prev =>
			prev.map(todo => (todo._id === id ? { ...todo, ...updates } : todo))
		);

		try {
			const updated = await updateTodo(id, updates);

			setTodos(prev => prev.map(todo => (todo._id === id ? updated : todo)));
		} catch (error) {
			console.error('Failed to update todo:', error);
			if ('completed' in updates) {
				setTodos(prev =>
					prev.map(todo =>
						todo._id === id ? { ...todo, completed: !updates.completed } : todo
					)
				);
			}
		}
	};

	const removeTodo = async (id: string) => {
		try {
			await deleteTodo(id);
			setTodos(prev => prev.filter(t => t._id !== id));
		} catch (error) {
			console.error('Failed to delete todo:', error);
		}
	};

	return { todos, loading, addTodo, removeTodo, editTodo };
};
