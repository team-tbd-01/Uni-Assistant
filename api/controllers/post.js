const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Post } = db;

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
  Post.findAll({})
    .then(posts => res.json(posts));
});

// TODO: When creating a user, make sure passwords get hashed.
router.post('/',passport.isAuthenticated(), (req, res) => {
  let cont = req.body;
  console.log(cont);
  Post.create({
    content: cont.content, 
    userId: req.user.id,
    courseId: cont.courseId
   })
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});

router.get('/course/:id', (req, res) => {
  const { id } = req.params;

  Post.findAll({
    where: {
      courseId: id
    }
  })
  .then(post => {
    if (!post) {
      return res.sendStatus(404);
    }

    res.json(post);
  })
})

// TODO: Make updating a user more secure, especially if they want to update a password
router.put('/:id',passport.isAuthenticated(), (req, res) => {
  
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.update({
        content: req.body.content
      })

      post.save()
        .then(post => {
          res.json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});

router.delete('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted post with id" + id
      })
    });
});


module.exports = router;