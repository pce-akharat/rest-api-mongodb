const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// get a list of books from the database
router.get('/books',function(req,res,next){
    Book.find({}).then(function(books){
        res.send(books);
    }).catch(next);
});

// add a new book to database
router.post('/books',function(req,res,next){
    Book.create(req.body).then(function(book){
        res.send(book);
    }).catch(next);
});

// update a book in the database
router.put('/books/:name',function(req,res,next){
    Book.findOneAndUpdate({name: req.params.name},req.body).then(function(book){
        Book.findOne({name: req.params.name}).then(function(book){
            res.send(book);
        });
    });
});

// delete a book in the database
router.delete('/books/:name',function(req,res,next){
    Book.findOneAndDelete({name: req.params.name}).then(function(book){
        res.send(book);
    });
});

module.exports = router;