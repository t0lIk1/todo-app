import axios from 'axios';

export const API = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/api`,
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
	body: { todoText?: string; completed?: boolean }
) => {
	const { data } = await API.put(`/todos/${id}`, body);
	return data;
};

export const deleteTodo = async (id: string) => {
	await API.delete(`/todos/${id}`);
	return id;
};
