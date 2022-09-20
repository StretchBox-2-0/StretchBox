const request = require('request');
const database = require ('../model');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userController = {};

// create user
userController.createUser = async (req, res, next) => {
  try {
    //work with front end to get proper names
    const { username, password } = req.body;
    if(!username || !password ) return next('Missing username or password in the createUser controller');
    const passwordHash = await bcrypt.hash(password, SALT_WORK_FACTOR);

    const queryGetMaxId = 'select max(userId) from user';
    const idResults = await database.query(queryGetMaxId);
    const query = `INSERT INTO USERS (userId, username, passwordHash) VALUES( ${idResults + 1}, ${username}, ${passwordHash})`;

    const dbResults = await database.query(query);

    // store userID to locals to sendback to front-end
    res.locals.userID = dbResults[dbResults.length - 1 ].userId;
    return next(); 
  } catch (err) {
    return next({
      log: 'error creating user',
      message: { err: 'error creating user' }
    });
  }
};
// verify user
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return next('Missing username or password in the createUser controller');
    
    const query = 'SELECT * FROM USERS WHERE username = username';
    const dbResults = await database.query(query);

    const passwordCorrect = await bcrypt.compare(
      password,
      dbResults.passwordHash
    );

    if (passwordCorrect) {
      res.locals.userId = dbResults[0].userId; 
      return next(); 
    }
  } catch (err) {
    return next({
      log: 'error verifying user',
      message: { err: 'error verifying user' }
    });
  }
};

module.exports = userController;
