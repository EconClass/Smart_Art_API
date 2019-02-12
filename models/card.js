const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

CardSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

module.exports = mongoose.model("Card", CardSchema);