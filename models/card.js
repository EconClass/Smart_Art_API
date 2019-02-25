const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

// CardSchema.pre("save", function(next) {
//     const now = new Date();
//     this.updatedAt = now;

//     if (!this.createdAt) {
//         this.createdAt = now;
//     }

//     next();
// });

module.exports = mongoose.model("Card", CardSchema);