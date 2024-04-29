import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tittle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model('Note',noteSchema)