const request = require("request");
const database = require("../model");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;

const userController = {};

// create user
userController.createUser = async (req, res, next) => {
  try {
    //work with front end to get proper names
    const { username, password } = req.body;
    if (!username || !password)
      return next("Missing username or password in the createUser controller");
    // const passwordHash = await bcrypt.hash(password, SALT_WORK_FACTOR);
    const queryGetMaxId = "select max(userid) from users";
    const queryResults = await database.query(queryGetMaxId);
    const insertedId = queryResults.rows[0]["max"] + 1;

    const query = `INSERT INTO USERS (userid, username, password) VALUES( ${insertedId}, '${username}', '${password}')`;

    const dbResults = await database.query(query);

    // store userID to locals to sendback to front-end
    res.locals.userID = insertedId;
    return next();
  } catch (err) {
    return next({
      log: "error creating user",
      message: { err: `error creating user ERROR: ${err}` },
    });
  }
};
// verify user
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return next("Missing username or password in the createUser controller");

    const query = `SELECT * FROM USERS WHERE username = '${username}'`;
    const dbResults = await database.query(query);
    console.log(dbResults, "dbResults");
    // const passwordCorrect = await bcrypt.compare(
    //   password,
    //   dbResults.passwordHash
    // );

    // if (passwordCorrect) {
    res.locals.userID = dbResults.rows[0].userid;
    return next();
    // }
  } catch (err) {
    return next({
      log: "error verifying user",
      message: { err: "error verifying user" },
    });
  }
};

module.exports = userController;
