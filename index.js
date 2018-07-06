const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

app.get('/auth/google', (req, res) => {
    res.send({ hello : 'buddy'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);