
const AppError = require('../AppError');

/**
 *The first parameter (error) tells the express that this is the error handler
 */
const errorHandler = (error, req, res, next) => {

  if(error.name === "ValidationError"){
    return res.status(400).send({
      type: "ValidationError",
      details: error.details
    });

  }

  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      errorCode: error.errorCode,
    })
  }
  res.status(500).send("Something went wrong in server");
};

module.exports = errorHandler;
