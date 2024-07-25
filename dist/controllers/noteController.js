"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.listNotes = exports.saveNote = void 0;
const noteModel_1 = __importDefault(require("../models/noteModel"));
// Function to save a new note
const saveNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newNote = new noteModel_1.default({
            content: req.body.content,
            title: req.body.title // Corrected the typo here
        });
        yield newNote.save();
        res.status(201).json(newNote);
    }
    catch (error) {
        // Type assertion for unknown error
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.saveNote = saveNote;
// Function to list all notes
const listNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield noteModel_1.default.find();
        res.status(200).json(notes);
    }
    catch (error) {
        // Type assertion for unknown error
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.listNotes = listNotes;
// Function to delete a note by ID
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield noteModel_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Note deleted' });
    }
    catch (error) {
        // Type assertion for unknown error
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
});
exports.deleteNote = deleteNote;
