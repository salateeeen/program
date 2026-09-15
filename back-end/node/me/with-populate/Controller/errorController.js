const appError = require(`../Error/appError`)

const sendErrorProdc = function (err, req, res, next) {
  if (err.isOperational) {
    return res.status(err.statusCode)
      .json({
        name: err.name,
        status: err.status,
        message: err.msg
      })
  }
  else {
    return res.status(500).json({
      status: `error`,
      error: err,
      message: `Somthing went wrong (is not operational).`,
    })
  }
}

const handleIdError = (err) => {
  console.log(`🔥handleIdError🔥`);

  const message = `Invalid ${err.path}: ${err.value}🔥`
  return new appError(message, 400)
}

const handleDuplicateError = (err) => {
  console.log(`🔥handleDuplicateError🔥`);

  const value = err.errmsg.match(/{\s.+\s.+\s}/gi)[0];
  const message = `Duplicat value ${value}, plaese use another value.🔥`
  return new appError(message, 400)
}

const handleValidationError = (err) => {
  console.log('🔥handleValidationError🔥');
  console.log(err);

  const errors = Object.values(err.errors).map(ele => ele.message)
  const message = `Invalid data: ${errors.join(`, `)}🔥`
  return new appError(message, 400)
}

const handleJsonWebTokenError = () => {
  console.log(`🔥handleJsonWebTokenError🔥`);
  return new appError(`Invaled Json Web Token.🔥`, 401)
}

const handleTokenExpiredError = () => {
  console.log(`🔥handleTokenExpiredError🔥`);
  return new appError(`Your Json Web Token is Expired.🔥`, 401)
}

module.exports = (err, req, res, next) => {
  err.status = err.status || "fail";
  err.statusCode = err.statusCode || 404;
  let error = { ...err };

  if (err.name === `CastError`) error = handleIdError(err);
  if (err.code === 11000) error = handleDuplicateError(err);
  if (err.name === `ValidationError`) error = handleValidationError(err);
  if (err.name === `JsonWebTokenError`) error = handleJsonWebTokenError();
  if (err.name === `TokenExpiredError`) error = handleTokenExpiredError();

  sendErrorProdc(error, req, res, next)
}