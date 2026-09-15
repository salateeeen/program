const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
app.use(express.json())

dotenv.config({ path: `./config.env` })
const db = process.env.DATABASE.replace(
    `<PASSWORD>`,
    process.env.DATABASE_PASSWORD)


mongoose.connect(db)
  .then(() => {
    console.log('Connection successful');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

  
const router = require('./router/router.js');
app.use(`/api/v1/students`, router)


app.listen(3000, () => console.log(`Example app listening on port 3000!`))