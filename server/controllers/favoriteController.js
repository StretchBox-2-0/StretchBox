const database = require("../model");
const favoriteController = {};

// create user
favoriteController.createFavorite = async (req, res, next) => {
  try {
    //work with front end to get proper names
    console.log(req.body, 'req.body')
    // const {stretchid, name } = req.body;
    // const userID = res.locals.user.userId; 
    // console.log(userID, 'userID')
    //sql goes here
    // const query = `INSERT INTO favorite (userid, exerciseid, exercisename) VALUES (${userID}, ${exerciseid},'${name}')`;
    // const dbResults = await database.query(query);  
    // console.log(dbResults, 'dbResults');
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