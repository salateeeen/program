const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const dbConnections =  mongoose.createConnection();

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
},
  { timestamps: false });

module.exports = mongoose.model("category", categorySchema);

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



app.listen(3000, () => console.log(`Example app listening on port 3000!`))
