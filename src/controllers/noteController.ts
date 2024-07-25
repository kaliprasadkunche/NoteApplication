import { Request, Response } from 'express';
import Note from '../models/noteModel';

// Function to save a new note
export const saveNote = async (req: Request, res: Response) => {
  try {
    const newNote = new Note({
      content: req.body.content,
      title: req.body.title // Corrected the typo here
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    // Type assertion for unknown error
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Function to list all notes
export const listNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    // Type assertion for unknown error
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Function to delete a note by ID
export const deleteNote = async (req: Request, res: Response) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    // Type assertion for unknown error
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};
