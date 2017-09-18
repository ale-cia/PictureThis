var express = require("express");
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
  pool.connect(function (error, db, done) {
    if (error) {
      console.log('Error connecting to the DB', error);
      res.sendStatus( 500 );
      done();
      return;
    } // end error
    else {

      db.query('SELECT * FROM messages', function(err, result) {
				done();
				if(err) {
					console.log('There was an error making the SELECT query', err);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
      })//SELECT query
    } // end no error
  }); // end pool connect
}); // end get

router.post('/', function(req, res) {
  console.log('post route!', req.body);

  pool.connect(function (error, db, done) {
      if (error) {
          // when connecting to database failed
          console.log('Error connecting to database', err);
          res.sendStatus(500);
      } else {
          // when connecting to database worked!
          db.query('INSERT INTO messages (name, description, location) VALUES ($1, $2, $3);',
              [req.body.name, req.body.description, req.body.location],
              function (errorMakingQuery, result) {
                  done();
                  if (errorMakingQuery) {
                      console.log('Error making INSERT query', errorMakingQuery);
                      res.sendStatus(500);
                  } else {
                      res.sendStatus(201);
                  }
              });
      }
  });
});

router.put('/:id', function(req, res) {
  console.log('id of the task to update is on req.params:', req.params.id);
  pool.connect(function (error, db, done) {
      if (error) {
          // when connecting to database failed
          console.log('Error connecting to database', err);
          res.sendStatus(500);
      } else {
          // when connecting to database worked!
          db.query('UPDATE messages SET name = $1, description = $2, location = $3 WHERE id = $4',
              [req.body.name, req.body.description, req.body.location, req.params.id],
              function (err, result) {
                  done();
                  if (err) {
                      console.log('Error making UPDATE query', errorMakingQuery);
                      res.sendStatus(500);
                  } else {
                      res.sendStatus(200);
                  }
              });
      }
  });

});

router.delete('/:id', function(req, res) {
  console.log('id of the task to delete is on req.params:', req.params.id);
  pool.connect(function (err, db, done) {
      if (err) {
          // when connecting to database failed
          console.log('Error connecting to database', err);
          res.sendStatus(500);
      } else {
          // when connecting to database worked!
          db.query('DELETE FROM messages WHERE id = $1',
              [req.params.id], // variable with the id number
              function (errorMakingQuery, result) {
                  done();
                  if (err) {
                      console.log('Error making DELETE query', err);
                      res.sendStatus(500);
                  } else {
                      // send back tasks array
                      res.sendStatus(200);
                  }
              });
      }
  });

});
module.exports = router;
