const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
<<<<<<< HEAD
    createdAt: { type: Date },
    updatedAt: { type: Date },
=======
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

<<<<<<< HEAD
CardSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});
=======
// CardSchema.pre("save", function(next) {
//     const now = new Date();
//     this.updatedAt = now;

//     if (!this.createdAt) {
//         this.createdAt = now;
//     }

//     next();
// });
>>>>>>> 3067f47f18247a40555d310cfcdb8a530fe1b452

module.exports = mongoose.model("Card", CardSchema);