import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json());

const apiPrefix = '/api';
app.use(`${apiPrefix}/todos`, todoRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
});

export default app;
