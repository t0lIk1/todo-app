import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:3000/api',
});

export const getTodos = async () => {
	const { data } = await API.get('/todos');
	return data;
};

export const createTodo = async (todoText: string) => {
	const { data } = await API.post('/todos', { todoText });
	return data;
};

export const updateTodo = async (id: string, completed: boolean) => {
	const { data } = await API.put(`/todos/${id}`, { completed });
	return data;
};

export const deleteTodo = async (id: string) => {
	await API.delete(`/todos/${id}`);
	return id;
};
