const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { School } = db;

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
  School.findAll({})
    .then(school => res.json(school));
});


router.post('/', (req, res) => {
  let content = req.body;
  
  School.create({
    schoolname: content.schoolname,
   })
    .then(school => {
      res.status(201).json(school);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  School.findByPk(id)
    .then(school => {
      if(!school) {
        return res.sendStatus(404);
      }

      res.json(school);
    });
});

router.put('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  School.findByPk(id)
    .then(school => {
      if(!school) {
        return res.sendStatus(404);
      }

      school.update({schoolname: req.body.schoolname})

      school.save()
        .then(school => {
          res.json(school);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});

router.delete('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  School.findByPk(id)
    .then(school => {
      if(!school) {
        return res.sendStatus(404);
      }

      school.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted school with id" + id
      })
    });
});


module.exports = router;