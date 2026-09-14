const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const appError = require(`${__dirname}/Error/appError`)
const errorController = require(`./Controller/errorController.js`)

/// create app 
const app = express();

app.use(express.json());

dotenv.config({ path: `./config.env` });
const db = process.env.DATABASE.replace(
  `<PASSWORD>`,
  process.env.DATABASE_PASSWORD);

mongoose.connect(db)
  .then(() => {
    console.log('DB connection successful');
    runApp()
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

const userRouter = require('./Router/userRouter.js');
const courseRouter = require('./Router/courseRouter.js');
const reviewRouter = require(`./Router/reviewRouter.js`)

app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/reviews', reviewRouter);


app.use((req, res, next) => {
  next(new appError(`This url ${req.originalUrl} is not found.`, 404));
});


app.use(errorController);

/// run app 
const runApp = function () {
  app.listen(3000, () => console.log(`Example app listening on port 3000!`));
}