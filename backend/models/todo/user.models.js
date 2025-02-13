import mongoose, { Schema } from "mongoose"

const userSchema = new mongoose.Schema(

    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
          },
          password: {
            type: String,
            required: [true, 'password is required'],
            unique: true,
            lowercase: true,
          },

},{temesstemps: true}
)

export const User = mongoose.model("User", userSchema)