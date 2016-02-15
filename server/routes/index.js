(function () {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var mongojs = require('mongojs');
    var db = mongojs('meanTodo', ['todos', 'passengerJourneys', 'users','makes']);

    /* GET home page. */
    router.get('/', function (req, res) {
        res.render('index');
    });
    router.get('/api/todos', function (req, res) {
        db.todos.find(function (err, data) {
            res.json(data);
        });
    });
    router.post('/api/todos', function (req, res) {
        db.todos.insert(req.body, function (err, data) {
            res.json(data);
        });
    });

    router.put('/api/todos', function (req, res) {
        db.todos.update({
            _id: mongojs.ObjectId(req.body._id)
        }, {
            isCompleted: req.body.isCompleted,
            todo: req.body.todo
        }, {}, function (err, data) {
            res.json(data);
        });
    });
    router.delete('/api/todos/:_id', function (req, res) {
        db.todos.remove({
            _id: mongojs.ObjectId(req.params._id)
        }, '', function (err, data) {
            res.json(data);
        });
    });
//---------------------------Passenger Journey----------------------------------------------------
    router.post('/api/journey', function (req, res) {
        db.passengerJourneys.insert(req.body, function (err, data) {
            res.json(data);
        });
    });
    router.get('/api/journey', function (req, res) {
        db.passengerJourneys.find(function (err, data) {
            res.json(data);
        });
    });

//------------------------------Register user-------------------------------------------------
    router.post('/api/registerUser', function (req, res) {
        db.users.insert(req.body, function (err, data) {
            res.json(data);
        });
    });

    router.get('/api/registerUser', function (req, res) {
        db.users.find(function (err, data) {
            res.json(data);
        });
    });
//----------------------------------Make model--------------------------------------------------------

    router.get('/api/make', function (req, res) {
        db.makes.find(function (err, data) {
            res.json(data);
        });
    });

    module.exports = router;
}());