const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

const portnum = process.env.PORT || 5000;

app.listen(portnum, ()=>{console.log(`Connecting to port ${portnum}`)});
