export default interface ITodo {
	_id: string;
	todoText: string;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date | null;
}
