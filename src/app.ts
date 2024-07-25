import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/noteRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'your_local_mongodb_connection_string';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//npx ts-node src/app.ts
//mongodb+srv://kaliprasadkunche:Kali659600@noteapp.rcisevl.mongodb.net/?retryWrites=true&w=majority&appName=NoteApp

//mongodb+srv://kaliprasadkunche:Kali659600@noteapp.rcisevl.mongodb.net/?retryWrites=true&w=majority&appName=NoteApp
