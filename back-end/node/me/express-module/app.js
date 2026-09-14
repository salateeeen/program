const express = require('express')
const app = express()

app.use(express.json())

const router = require('./router/router.js');
app.use(`/api/v1/students`, router)

app.listen(3000, () => console.log(`Example app listening on port 3000!`))