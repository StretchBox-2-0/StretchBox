const database = require("../model");
const favoriteController = {};


// get user
favoriteController.getFavorite = async (req, res, next) => {
  console.log(res.locals.user.userId, 'res.locals.user.userId')
  try {
    console.log('IN FAV')
    console.log(res.locals.user.userId, 'res.locals.user.userId')
    const query = `SELECT * from favorite where userid = ${res.locals.user.userId};`
    const dbResults = await database.query(query);
    console.log(dbResults.rows, 'dbResults') //dbResults.rows

    // store userID to locals to sendback to front-end
    // res.locals.userID = insertedId;
    return next();
  } catch (err) {
    return next({
      log: "error getting favorite exercises",
      message: { err: `error getting favortie exercises ERROR: ${err}` },
    });
  }
};

//delete user
favoriteController.deleteFavorite = async (req, res, next) => {
  try {
    const { stretchid } = req.body
    //work with front end to get proper names
    // const { stretchid, name } = req.body;
    const userID = res.locals.user.userId;
    //sql goes here
    const query = `DELETE FROM FAVORITE where combinedid = 'user:${userID},exercise:${stretchid}';`;
    dbResults = await database.query(query);

    // store userID to locals to sendback to front-end
    // res.locals.userID = insertedId;
    return next();
  } catch (err) {
    return next({
      log: "error deleting favorite exercises",
      message: { err: `error deleting favortie exercises ERROR: ${err}` },
    });
  }
};

// create user
favoriteController.createFavorite = async (req, res, next) => {
  try {
    console.log('IN FAV')
    //work with front end to get proper names
    const { stretchid, name } = req.body;
    const userID = res.locals.user.userId;
    //sql goes here
    const query = `INSERT INTO favorite (CombinedId, stretchID, userID, stretchName) VALUES ('user:${userID},exercise:${stretchid}',${stretchid}, ${userID}, '${name}')`;
    const dbResults = await database.query(query);
    // store userID to locals to sendback to front-end
    // res.locals.userID = insertedId;
    return next();
  } catch (err) {
    return next({
      log: `${err}, error creating favorite exercises`,
      message: { err: `error creating favortie exercises ERROR: ${err}` },
    });
  }
};

module.exports = favoriteController;
