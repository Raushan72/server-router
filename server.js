const express = require('express');
const personrouter = require('./person');
const studentrouter = require('./student');
const bookrouter = require('./book');

const app = express();
app.use(express.json());

app.use('/api/person', personrouter);
app.use('/api/student', studentrouter);
app.use('/api/book', bookrouter);

app.listen(3000, () => {
    console.log('server running')
});
