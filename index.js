const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the HTML Node JS app</h1>')
})

PORT = process.env.PORT |8080
app.listen(PORT, ()=> {
    console.log(`Running on PORT ${PORT}`);
})