const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const { tryCatch } = require('./utils/tryCatch');
const { INVALID_SUBSCRIPTION } = require('./constants/errorCodes');

const app = express();

const getUser = () => undefined;
const getSubscription = () => undefined;


app.get('/test', async (req, res, next) => {
  try {
    const user = getUser();
    if (!user) {
      throw new Error('user not found');
    }
  } catch (error) {
      // go to next piece of middle ware
    return next(error);
  }

  return res.status(200).json({ success: true });
});

app.post(
  '/login',
  tryCatch(async (req, res) => {
    const { error, value } = schema.validate({});
    // if (error) throw error;
    const subscription = getSubscription();
    if (!subscription) {
      throw new AppError(INVALID_SUBSCRIPTION, 'Subscription not found', 400);
    }
  })
);

// register the middle ware - has t be after the route.
app.use(errorHandler);

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
