import mongoose from "mongoose";

const patientSchems = new mongoose.Schema({},{timestamps: true});

export const Patient = mongoose.model("Patient", patientSchems);