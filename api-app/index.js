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
    res.status(200).send(`<h2> I am in working condition. Thanks for checking <h2>`)
})

app.get('/about', (req, res) => {
    res.status(200).send(`<h2> About this container group instance <h2>`)
})

PORT = process.env.PORT || 8080
app.listen(PORT, ()=> {
    console.log(`Running on PORT ${PORT}`);
})