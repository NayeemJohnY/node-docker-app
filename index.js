const express = require('express');

const app = express();


app.get('/health', (req, res) => {
    res.status(200).send(`<h2> I am in working condition. Thanks for checking <h2>`)
})

app.get('/about', (req, res) => {
    res.status(200).send(`<h2> About this container group instance <h2>`)
})

PORT = process.env.PORT | 8080
app.listen(PORT, ()=> {
    console.log(`Running on PORT ${PORT}`);
})