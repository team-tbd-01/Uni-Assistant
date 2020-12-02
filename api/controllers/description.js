const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Description } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  Description.findAll({})
    .then(description => res.json(description));
});

// TODO: When creating a user, make sure passwords get hashed.
router.post('/', (req, res) => {
  let cont = req.body;
  
  Description.create({
    content: cont.content, 
    userId: cont.userid,
    courseId: cont.courseid
   })
    .then(description => {
      res.status(201).json(description);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
    Description.findByPk(id)
    .then(description => {
      if(!description) {
        return res.sendStatus(404);
      }

      res.json(description);
    });
});

// TODO: Make updating a user more secure, especially if they want to update a password
router.put('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Description.findByPk(id)
    .then(description => {
      if(!description) {
        return res.sendStatus(404);
      }

      description.update({
        content: req.body.content
      })

      description.save()
        .then(description => {
          res.json(description);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Description.findByPk(id)
    .then(description => {
      if(!description) {
        return res.sendStatus(404);
      }

      description.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted description with id" + id
      })
    });
});


module.exports = router;