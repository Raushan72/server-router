const express = require('express');
const router = express.Router();

const output = [];

router.post('/', (req, res) => {
    const body = req.body
    output.push(body)
    res.send('added')
});

router.get('/', (req, res) => {
    res.send(output)
});

router.get('/:id', (req, res) => {
    const id = +req.params.id
    const person = output.find(obj => obj.id === id)
    res.send(person)
});

router.put('/:id', (req, res) => {
    const id = +req.params.id
    const updateperson = output.find(obj => obj.id === id)
    const body = req.body.name
    updateperson.name = body
    res.send(' person udated')
});

router.delete('/:id', (req, res) => {
    const id = +req.params.id
    const deleteid = output.findIndex(obj => obj.id === id)
    output.splice(deleteid, 1)
    res.send('person deleted')
}); 

module.exports = router