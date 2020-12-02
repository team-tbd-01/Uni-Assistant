const express = require('express');
const router = express.Router();
const db = require('../models');
const { Role } = db;

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

// TODO: Change from Users to Department
router.get('/', (req,res) => {
    Role.findAll({})
    .then(role => res.json(role));
});


router.post('/', (req, res) => {
  let cont = req.body;
  
  Role.create({
    name: cont.name
   })
    .then(role => {
      res.status(201).json(role);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Role.findByPk(id)
    .then(role => {
      if(!role) {
        return res.sendStatus(404);
      }

      res.json(role);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Role.findByPk(id)
    .then(role => {
      if(!role) {
        return res.sendStatus(404);
      }

      role.update({
        content: cont.content
      })

      role.save()
        .then(commentlike => {
          res.json(commentlike);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Role.findByPk(id)
    .then(role => {
      if(!role) {
        return res.sendStatus(404);
      }

      role.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted role with id" + id
      })
    });
});


module.exports = router;