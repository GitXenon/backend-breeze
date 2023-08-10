const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        ppm: Math.floor(Math.random() * (3500 - 400 + 1) + 400)
    }
    );
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});