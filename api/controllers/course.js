const express = require('express');
const router = express.Router();
const db = require('../models');
const { Course } = db;

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


// TODO: Change from Users to Courses
router.get('/', (req,res) => {
  Course.findAll({})
    .then(course => res.json(course));
});


router.post('/', (req, res) => {
  let content = req.body;
  
  Course.create({
    name: req.body.name,
    course_code: req.body.code,
    // departmentId: req.body.departmentid,
    // schoolId: req.body.schoolid
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
  Course.findByPk(id)
    .then(course => {
      if(!course) {
        return res.sendStatus(404);
      }

      res.json(course);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Course.findByPk(id)
    .then(course => {
      if(!course) {
        return res.sendStatus(404);
      }

      course.update({
        name: req.body.coursename,
        course_code: req.body.coursecode,
        schoolId: req.body.schoolid,
        departmentId: req.body.departmentId
      })

      course.save()
        .then(course => {
          res.json(course);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Course.findByPk(id)
    .then(course => {
      if(!course) {
        return res.sendStatus(404);
      }

      course.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted course with id" + id
      })
    });
});


module.exports = router;