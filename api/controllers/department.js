const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Department } = db;

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
  Department.findAll({})
    .then(department => res.json(department));
});


router.post('/', (req, res) => {
  let content = req.body;
  
  Department.create({
    departmentname: content.departmentname,
    abbreviation: content.abbreviation
   })
    .then(department => {
      res.status(201).json(department);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Department.findByPk(id)
    .then(department => {
      if(!department) {
        return res.sendStatus(404);
      }

      res.json(department);
    });
});


router.put('/:id', (req, res) => {
router.put('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Department.findByPk(id)
    .then(department => {
      if(!department) {
        return res.sendStatus(404);
      }

      department.update({
        departmentname: req.body.departmentname,
        abbreviation: req.body.abbreviation
      })

      department.save()
        .then(department => {
          res.json(department);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Department.findByPk(id)
    .then(department => {
      if(!department) {
        return res.sendStatus(404);
      }

      department.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted department with id" + id
      })
    });
});


module.exports = router;