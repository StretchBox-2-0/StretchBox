const database = require("../model");
const favoriteController = {};

// create user
favoriteController.createFavorite = async (req, res, next) => {
  try {
    //work with front end to get proper names
    const {stretchid, name } = req.body;
    const userID = req.locals.user.userId; 

    //sql goes here
    const query = `INSERT INTO favorite (userid, exerciseid, exercisename) VALUES (${userID}, ${exerciseid},'${name}')`;
    const dbResults = await database.query(query);  

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

module.exports = favoriteController;
































// const query = `INSERT INTO favorite (userid, exerciseid, exercisename, instructions) VALUES( ${userid}, ${exerciseid}, NULL, NULL)`;