import mongoose from "mongoose";

const productSchema =  new mongoose.Schema(
    {
        description: {
            type: true,
            required: true
        },
        name: {
            type: true,
            required: true,
        },
        productImage: {
                type: String,

        },
        price: {
            type: Number,
            default: 0,
            
        },
        stock: {
            type: Number,
            default: 0,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categories",
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
},
{timestamps: true});

export const Product = mongoose.model("Product", productSchema)
