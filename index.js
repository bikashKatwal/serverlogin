const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ Hi: 'I am fast' });
});

const PORT=process.env.PORT || 5000;

app.listen(5000, ()=>{console.log(`Connecting to port ${PORT}`)});
