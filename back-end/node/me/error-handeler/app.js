const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const appError = require(`${__dirname}/error/appError`)
const errorController = require(`./controller/errorController.js`)
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

/// if reach her so it wasn`t catch by any router
app.use((req, res, next) => {
  //! next("anything") => go to global error handeling
  next(new appError(`this url ${req.originalUrl} is not found`, 404))
})

//! GLOBAL ERROR HANDLING
app.use(errorController)

app.listen(3000, () => console.log(`Example app listening on port 3000!`))