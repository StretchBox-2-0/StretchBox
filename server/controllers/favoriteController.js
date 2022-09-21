const database = require("../model");
const favoriteController = {};


// get user
favoriteController.getFavorite = async (req, res, next) => {
  console.log(res.locals.user.userId, 'res.locals.user.userId')
  try {
    console.log('IN FAV')
    console.log(res.locals.user.userId, 'res.locals.user.userId')
    const query = `SELECT a.userid,a.stretchname,b.instructions,b.img,b.neck,b.abdominals,b.abductors,b.adductors,b.biceps,b.calves,b.chest,b.forearms,b.glutes,b.hamstrings,b.lats,b.lower_back,b.middle_back,b.quadriceps,b.traps,b.triceps, b.stretch_id
        FROM favorite a
        Left Join stretches b on a.stretchid = b.stretch_id
        where a.userid = ${res.locals.user.userId};`
    const dbResults = await database.query(query);
    res.locals.favStretches = dbResults.rows

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
