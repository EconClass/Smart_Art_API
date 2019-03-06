const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Card = require('./card.js');

const DeckSchema = new Schema({
    // createdAt: { type: Date },
    // updatedAt: { type: Date },
    title: {type: String, required: true},
    cards: [{type: Object.Schema._id}],
});

// DeckSchema.pre("save", function(next) {
//     const now = new Date();
//     this.updatedAt = now;

//     if (!this.createdAt) {
//         this.createdAt = now;
//     }

//     next();
// });


module.exports = mongoose.model("Deck", DeckSchema);
