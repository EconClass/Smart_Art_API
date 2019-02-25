const mongoose = require("mongoose");
<<<<<<< HEAD
=======
const Question = require('./question.js');
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
<<<<<<< HEAD
    questions: [{ type: Object }],
=======
    title: { type: String, required: true },
    questions: [Question.schema],
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
    category: [String]
});

QuizSchema.pre("save", function(next) {
<<<<<<< HEAD
    // SET createdAt AND updatedAt
=======
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

module.exports = mongoose.model("Quiz", QuizSchema);