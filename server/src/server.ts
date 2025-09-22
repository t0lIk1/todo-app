import app from './app';
import connectDB from './config/db';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

(async () => {
    try {
        await connectDB(MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        if (err instanceof Error) {
            console.error('Failed to start server:', err.message);
        } else {
            console.error('Unknown error:', err);
        }
        process.exit(1);
    }
})();
