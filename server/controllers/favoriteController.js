const database = require("../model");
const favoriteController = {};

//delete for favorite AND get
// get user
favoriteController.getFavorite = async (req, res, next) => {
  try {
    console.log('IN FAV')
    //work with front end to get proper names
    // const { stretchid, name } = req.body;
    const userID = res.locals.user.userId; 
    //sql goes here
    const query = `SELECT distinct * from favorite where userid = ${userID};`
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



// create user
favoriteController.createFavorite = async (req, res, next) => {
  try {
    console.log('IN FAV')
    //work with front end to get proper names
<<<<<<< HEAD
    console.log(req.body, 'req.body')
    // const {stretchid, name } = req.body;
    // const userID = res.locals.user.userId; 
    // console.log(userID, 'userID')
    //sql goes here
    // const query = `INSERT INTO favorite (userid, exerciseid, exercisename) VALUES (${userID}, ${exerciseid},'${name}')`;
    // const dbResults = await database.query(query);  
    // console.log(dbResults, 'dbResults');
=======
    const { stretchid, name } = req.body;
    const userID = res.locals.user.userId; 
    //sql goes here
    const query = `INSERT INTO favorite (CombinedId, stretchID, userID, stretchName) VALUES ('user:${userID},exercise:${exerciseID}',${stretchid}, ${userID}, '${name}')`;
    const dbResults = await database.query(query);  

>>>>>>> dev
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