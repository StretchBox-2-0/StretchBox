const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_KEY;

const jwtController = {};

jwtController.create = (req, res, next) => {
  const { id, username, password } = res.locals.user;
  res.cookie(
    'jwt',
    jwt.sign(
      {
        userId: id,
        username: username,
        password: password,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    )
  );
  next(); 
};

jwtController.verify = (req, res, next) => {
  // if cookie does not exisit return error
  if (!req.cookies.jwt) {
    return next({
      log: null,
      status: 401,
      message: 'Not Logged In!'
    });
  }
  try {
    res.locals.user = jwt.verify(req.cookies.jwt, JWT_SECRET);
    return next();
  }
  catch (err) {
    next({
      log: null,
      status: 401,
      message: 'Invalid JWT',
    });
  }
};
module.exports = jwtController;
