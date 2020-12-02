const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

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
  User.findAll({})
    .then(users => res.json(users));
});

// TODO: When creating a user, make sure passwords get hashed.
router.post('/', (req, res) => {
  let content = req.body;
  
  User.create({
    username: content.username,
    password: content.password,
    email: content.email,
    first_name: content.first_name,
    last_name: content.last_name
   })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      res.json(user);
    });
});

// TODO: Make updating a user more secure, especially if they want to update a password
router.put('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      user.update({
        username: req.body.username
      })

      user.save()
        .then(user => {
          res.json(user);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      user.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted user with id" + id
      })
    });
});


module.exports = router;