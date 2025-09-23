import axios from 'axios';

const API = axios.create({
	baseURL: `${process.env.EXPO_PUBLIC_API_URL}/api`,
});

export const getTodos = async () => {
	const { data } = await API.get('/todos');
	return data;
};

export const createTodo = async (todoText: string) => {
	const { data } = await API.post('/todos', { todoText });
	return data;
};

export const updateTodo = async (
	id: string,
	updates: { todoText?: string; completed?: boolean }
) => {
	const { data } = await API.put(`/todos/${id}`, updates);
	return data;
};

export const deleteTodo = async (id: string) => {
	await API.delete(`/todos/${id}`);
	return id;
};
