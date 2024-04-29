import mongoose from "mongoose";

const Schema = mongoose.Schema;

const caseSchema = new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tittle: {
        type: String,
        required: true
    },
    number: {
        type: String,
        default: "Pending"
    },
    problem_description: {
        type: String,
        default: "Pending"
    },
    current_status: {
        type: String,
        default: "Pending"
    },
    action_plan: {
        type: String,
        default: "Pending"
    },
    last_action: {
        type: String,
        default: "Pending"
    },
    state: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model('Case',caseSchema)