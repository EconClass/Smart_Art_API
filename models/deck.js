const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    title: {type: String, required: true},
    cards: [{ type: Object }],
});

DeckSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

module.exports = mongoose.model("Deck", DeckSchema);