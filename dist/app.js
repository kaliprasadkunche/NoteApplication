"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'your_local_mongodb_connection_string';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
app.use('/api/notes', noteRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//npx ts-node src/app.ts
//mongodb+srv://kaliprasadkunche:Kali659600@noteapp.rcisevl.mongodb.net/?retryWrites=true&w=majority&appName=NoteApp
//mongodb+srv://kaliprasadkunche:Kali659600@noteapp.rcisevl.mongodb.net/?retryWrites=true&w=majority&appName=NoteApp
