/*const express = require('express');
const router = express.Router();

const output = [];

router.post('/', (req, res) => {
    const body = req.body
    output.push(body)
    res.send('add complete')
});

router.get('/', (req, res) => {
    res.send(output)
});

router.get('/:id', (req, res) => {
    const id = +req.params.id
    const books = output.find(obj => obj.id === id)
    res.send(books)
});

router.put('/:id', (req, res) => {
    const id = +req.params.id
    const bookupdate = output.find(obj => obj.id === id)
    const tech = req.body.tech
    bookupdate.tech = tech
    const name = req.body.name
    bookupdate.name = name
    res.send('updated')
});

router.delete('/:id', (req, res) => {
    const id = +req.params.id
    const deleteperson = output.findIndex(obj => obj.id === id)
    output.splice(deleteperson, 1)
    res.send('book deleted')
});


module.exports = router*/




const express = require('express');
const router = express.Router();
var uuid = require('uuid');

const output = [];

router.post('/', (req, res) => {
    const body = req.body
    body.id = uuid.v4()
    body.id = new Date().getTime() 
    output.push(body)
    res.send('add complete')
});

router.get('/', (req, res) => {
    res.send(output)
});

router.get('/:id', (req, res) => {
    const id = +req.params.id
    const books = output.find(obj => obj.id === id)
    res.send(books)
});

router.put('/:id', (req, res) => {
    const id = +req.params.id
    const bookupdate = output.find(obj => obj.id === id)
    const tech = req.body.tech
    bookupdate.tech = tech
    const name = req.body.name
    bookupdate.name = name
    res.send('updated')
});

router.delete('/:id', (req, res) => {
    const id = +req.params.id
    const deleteperson = output.findIndex(obj => obj.id === id)
    output.splice(deleteperson, 1)
    res.send('book deleted')
});


module.exports = router