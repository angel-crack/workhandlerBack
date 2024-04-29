import mongoose from "mongoose";

const Schema = mongoose.Schema;

const casereviewSchema = new mongoose.Schema({
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

export default mongoose.model('CaseReview',casereviewSchema)