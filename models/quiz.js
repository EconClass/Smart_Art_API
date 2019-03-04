const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    questions: [{ type: Object }],
    title: { type: String, required: true },
    questions: [Object],
});

QuizSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

module.exports = mongoose.model("Quiz", QuizSchema);
