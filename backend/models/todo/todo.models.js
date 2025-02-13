import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({}, { timestamps: true });

export const todo = mongoose.model('Todo', todoSchema);
