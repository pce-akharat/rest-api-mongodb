
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create book schema & model
const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Name field is required']
    },
    pages: {
        type: Number
    }
});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;