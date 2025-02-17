import mongoose from "mongoose";

const medicalRecordSchem = new mongoose.Schema({},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchem);