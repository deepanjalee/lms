const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isAvailable: { 
        type: Boolean,
        default: true   
    },
    burrowedMemberId: {
        type: String,
        default: null
    },
    burrowedDate: {
        type: Date,
        default: null
    },

 });

 const Book = mongoose.model('Book', BookSchema);

    module.exports = Book;
    