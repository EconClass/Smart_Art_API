const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: { type: String, required: true },
    image: String,
    correct: { type: String, required: true },
    choices: [{ type: String, required: true }],
});

QuestionSchema.pre("save", function(next) {
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

module.exports = mongoose.model("Question", QuestionSchema);