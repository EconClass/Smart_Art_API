const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD

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
=======
Card = require('./card.js');

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
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452

module.exports = mongoose.model("Deck", DeckSchema);