const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: { type: String, required: true },
<<<<<<< HEAD
=======
    image: String,
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
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