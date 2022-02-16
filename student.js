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
    const studentid = output.find(obj => obj.id === id)
    console.log(studentid)
    res.send(studentid)
});


router.put('/:id', (req, res) => {
    const id = +req.params.id
    const studentid = output.find(obj => obj.id === id)
    const name = req.body.name
    studentid.name = name
    console.log(studentid)
    res.send('updated')
});


router.delete('/:id', (req, res) => {
    const id = +req.params.id
    const deleteid = output.findIndex(obj => obj.id === id)
    output.splice(deleteid, 1)
    res.send('deleted')
});

module.exports = router