import mongoose from "mongoose";

const typeSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        weaknesses: [{type: mongoose.Schema.Types.ObjectId, ref: 'types'}],
        strengths: [{type: mongoose.Schema.Types.ObjectId, ref: 'types'}],
        ineffective: [{type: mongoose.Schema.Types.ObjectId, ref: 'types'}],
    }
);

const types = mongoose.model("types", typeSchema);

export default types;