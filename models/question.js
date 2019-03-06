const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: { type: String, required: true },
    image: String,
    correct: { type: String, required: true },
    choices: [{ type: String, required: true }],
}, { timestamps: true });

module.exports = mongoose.model("Question", QuestionSchema);
