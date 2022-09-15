const express = require('express');
const morgan = require('morgan')
const { logger} = require('./logger')

const app = express();

app.use(morgan(':remote-addr :url :method HTTP/:http-version :user-agent', {
    immediate: true,
    stream: {
        write: (message) => {
            logger.info('APIENTRY', message);
        }
    }
}));
app.use(morgan(":remote-addr :url :method  :req[Content-length] :status :response-time ms", {
    stream: {
        write: (message) => {
            logger.info('APIEXIT', message);
        }
    }
}));

app.get('/health', (req, res) => {
    console.log(process.env)
    res.status(200).send(`<h2> I am in working condition. Thanks for checking <h2>`+ JSON.stringify(process.env))
})

app.get('/about', (req, res) => {
    res.status(200).send(`<h2> About this container group instance <h2>`)
})


app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to the HTML Node JS app:Deploy Me</h1>
    <button onclick="{checkHealth()}">Click Health</button>
    <button onclick="{about()}">About Me</button>
    <script type="text/javascript">
    
    async function checkHealth() {
        response = await fetch('/health', {})
        document.querySelector('body').innerHTML = (await response.text())
    }

    async function about() {
        response = await fetch('/about', {})
        document.querySelector('body').innerHTML = await response.text()
    }
    </script>
    `)
})

PORT = process.env.PORT || 80
app.listen(PORT, ()=> {
    logger.info("LOG", "App is Up and running on port", PORT);
})
