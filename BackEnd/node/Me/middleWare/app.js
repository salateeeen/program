const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();
const port = 3000;

//* global middleware to all requests *//
//& to add body in request
app.use(express.json())

/// own middleware
app.use((req, res, next) => {
    console.log(`hello from middleWare 1`);
    next()
})
app.use((req, res, next) => {
    console.log(`hello from middleWare 2`);
    next()
})
/// 3rd party middleware
app.use(morgan(`dev`))

// parse : from json to object
const students = JSON.parse(fs.readFileSync(`${__dirname}/data/students.json`, `utf-8`))

app.get('/api/v1/students', (req, res, next) => {
    console.log(`hello from GET mthode`);
    // res.status(200).json({
    //     status: "success",
    //     result: students.length,
    //     data: { students }
    // })
    next()
})

app.use((req, res, next) => {
    console.log(`is not reachable`);
    next()
})

app.listen(port, `localhost`, () => console.log(`Example app listening on port ${port}!`))
