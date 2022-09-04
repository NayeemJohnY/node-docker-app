const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.status(200).send(`<h2> I am in working condition. Thanks for checking <h2>`)
})

app.get('/about', (req, res) => {
    res.status(200).send(`<h2> About this container group instance <h2>`)
})

app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to the HTML Node JS app</h1>
    <button onclick="{checkHealth()}">Click Health</button>
    <button onclick="{about()}">About Me</button>
    <script type="text/javascript">
    
    async function checkHealth() {
        response = await fetch('/health', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        document.querySelector('body').innerHTML = (await response.text())
    }

    async function about() {
        response = await fetch('/about', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        document.querySelector('body').innerHTML = await response.text()
    }
    </script>
    `)
})

PORT = process.env.PORT || 80
app.listen(PORT, ()=> {
    console.log(`Running on PORT ${PORT}`);
})