import mongoose from "mongoose";

const  categorySchema = new mongoose.Schema(
    {
        name: {
            type: true,
            required: true,
        }
    }
    ,{timestamps: true});

export const Categories = mongoose.model("Categories", categorySchema);