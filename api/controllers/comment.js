const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Comment } = db;

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
    Comment.findAll({})
    .then(comment => res.json(comment));
});


router.post('/', passport.isAuthenticated(),(req, res) => {
  let cont = req.body;
  
  Comment.create({
    content: cont.content,
    userId: cont.userid,
    postId: cont.postid
   })
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Comment.findByPk(id)
    .then(comment => {
      if(!comment) {
        return res.sendStatus(404);
      }

      res.json(comment);
    });
});


router.put('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Comment.findByPk(id)
    .then(comment => {
      if(!comment) {
        return res.sendStatus(404);
      }

      comment.update({
        content: cont.content
      })

      comment.save()
        .then(comment => {
          res.json(comment);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Comment.findByPk(id)
    .then(comment => {
      if(!comment) {
        return res.sendStatus(404);
      }

      comment.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted comment with id" + id
      })
    });
});


module.exports = router;