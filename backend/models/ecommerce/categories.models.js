import mongoose from "mongoose";

const  categorySchema = new mongoose.Schema(
    {
        
    }
    ,{timestamps: true});

export const Categories = mongoose.model("Categories", categorySchema);