import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  title: { type: String, required: true } // Ensure title is included and required
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
