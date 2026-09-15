const appError = require(`../error/appError`)

const sendErrorProdc = function (err, res) {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      err,
      status: err.status,
      message: err.message
    })
  }
  else {
    return res.status(500).json({
      status: `error`,
      message: `somthing went wrong`,
    })
  }
}

const handleIdError = (err) => {
  const message = `invalid ${err.path}: ${err.value}`
  return new appError(message, 400)
}

const handleDuplicateError = (err) => {
  console.log(err.errmsg);
  const value = err.errmsg.match(/{\s.+\s.+\s}/gi)[0];
  console.log(value);
  const message = `duplicat value ${value}, plaese use another value`
  return new appError(message, 400)
}

const handleValidationError = (err) => {
  const errors = Object.values(err.errors)
    .map(ele => {
      return ele.message
    })
  const message = errors.join(", ")
  return new appError(message, 400)
}

module.exports = (err, req, res, next) => {
  err.status = err.status || "fail"
  err.statusCode = err.statusCode || 404
  let error = { ...err }
  err.isOperational = true
  if (err.name === `CastError`) error = handleIdError(err);
  if (err.code === 11000) error = handleDuplicateError(err);
  if (err.name === `ValidationError`) error = handleValidationError(err);

  sendErrorProdc(error, res)
}