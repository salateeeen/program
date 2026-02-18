const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');



dotenv.config({ path: `./config.env` })
const db = process.env.DATABASE.replace(
    `<PASSWORD>`,
    process.env.DATABASE_PASSWORD)

mongoose.connect(db)
  .then(() => {
    console.log('Connection successful');
  })
  .catch((err) => {
    console.error('Connection error');
  });


const Student = require('./models/studentModel.js');
const newStudent = new Student({
    id: Math.round(Math.random()* 99),
    name: "sultan"
})

newStudent.save().then(doc => {
    console.log(doc);
}).catch((err) => {
    console.log("error: ", err);
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`))
