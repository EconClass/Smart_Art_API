const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    questions: [{ type: Object }],
    title: { type: String, required: true },
    questions: [Object],
}, { timestamps: true });

module.exports = mongoose.model("Quiz", QuizSchema);
