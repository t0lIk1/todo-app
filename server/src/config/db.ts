import moongoose from 'mongoose';

const connectDB = async (mongoURI: string) => {
    try {
        await moongoose.connect(mongoURI);
        console.log(' MongoDB connected');
    } catch (err) {
        if (err instanceof Error) {
            console.error(' MongoDB connection error:', err.message);
        } else {
            console.error(' Unknown error:', err);
        }
        process.exit(1);
    }
};

export default connectDB;
