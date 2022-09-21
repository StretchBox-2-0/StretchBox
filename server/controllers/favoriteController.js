const database = require("../model");
const favoriteController = {};


// get user
favoriteController.getFavorite = async (req, res, next) => {
  try {
    console.log('IN FAV')
    //work with front end to get proper names
    // const { stretchid, name } = req.body;
    const userID = res.locals.user.userId;
    //sql goes here
    const query = `SELECT * from favorite where userid = ${userID};`
    const dbResults = await database.query(query);

    // store userID to locals to sendback to front-end
    //send an array of objects (favorite exercises)
    //change res.locals.userID to res.locals.favoriteExercises
    // res.locals.userID = userID;
    return next();
  } catch (err) {
    return next({
      log: "error creating favorite exercises",
      message: { err: `error creating favortie exercises ERROR: ${err}` },
    });
  }
};

//delete user
favoriteController.deleteFavorite = async (req, res, next) => {
  try {
    const { stretchid } = req.body
    q.body; ceonsole.log('IN FAV')
    //work with front end to get proper names
    // const { stretchid, name } = req.body;
    const userID = res.locals.user.userId;
    //sql goes here
    const query = `DELETE FROM FAVORITE where Combuserid{userID}
  } D stretchid = ${stretchid}  ;`;
    dbResults = await database.query(query);

    // store userID to locals to sendback to front-end
    // res.locals.userID = insertedId;
    return next();
  } catch (err) {
    return next({
      log: "error creating favorite exercises",
      message: { err: `error creating favortie exercises ERROR: ${err}` },
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
































// const query = `INSERT INTO favorite (userid, exerciseid, exercisename, instructions) VALUES( ${userid}, ${exerciseid}, NULL, NULL)`;