const request = require('request');
const database = require ('../model');

const workOutController = {};

//This api takes in all keys from req.body then makes an individual call to the database
//it then randomly selects one stretch from the call and returns it to res.locals
workOutController.getExercises = async (req, res, next) => {
  const keysArr = Object.keys(req.body);
  // create an array of stretch objs to send back
  const stretchArr = [];
  for (let i = 0; i < keysArr.length; i++){
    // grab the current key in keys array, and use that to get the value in req.body for that key
    const key = keysArr[i];
    const value = req.body[key];
    const text = `SELECT * FROM stretches WHERE ${key} = 'true'`;
    // query the database for that muscle for that # of stretches
    await database
      .query(text)
      .then((resp) => {
        // if the value is greater or equal to resp.rows.length
        if (value >= resp.rows.length) {
          // push all rows to array
          for (let i = 0; i < resp.rows.length; i++) {
            stretchArr.push({
              muscle: key,
              name: resp.rows[i].name,
              instructions: resp.rows[i].instructions
            });
          }
        } else {
          // else push random value number of rows to array
          const keys = [];
          let i = 0;
          while (value > i) {
            const index = Math.floor(Math.random() * (resp.rows.length - 0));
            if (keys.indexOf(index) > -1) continue;
            const stretch = {
              muscle: key,
              name: resp.rows[index].name,
              instructions: resp.rows[index].instructions
            };
            // save the returned stretch objs in stretchArr
            stretchArr.push(stretch);
            keys.push(index);
            i++;
          }
        }


      })
      
      .catch(err => {
        console.log('create stretch array error');
        return next({
          log: 'create stretch array error',
          message: { er: 'create stretch error'}
        });
      });
  }
  // save stretchArr to res.locals to be sent back in the following middleware
  res.locals.stretches = stretchArr;
  next ();
};

module.exports = workOutController;
