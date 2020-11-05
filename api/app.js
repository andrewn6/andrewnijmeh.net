const express = require("express");


const app = express();


app.length('/api', (req, res, next) => {
    res.send("im so cool ngl")
});

app.listen(8081, '0.0.0.0')