const express = require('express');

const app = express();


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
