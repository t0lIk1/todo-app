import { verify } from 'crypto'
import { Schema, model, Document } from "mongoose";


interface ITodo extends Document {
	todoText: string;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const todoSchema = new Schema<ITodo>(
	{
		todoText: { type: String, required: true },
		completed: { type: Boolean, default: false },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{ versionKey: false }
)

export default model<ITodo>('Todo', todoSchema);