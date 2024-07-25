import express from 'express';
import { saveNote, listNotes, deleteNote } from '../controllers/noteController';

const router = express.Router();

router.post('/', saveNote);
router.get('/', listNotes);
router.delete('/:id', deleteNote);

export default router;
