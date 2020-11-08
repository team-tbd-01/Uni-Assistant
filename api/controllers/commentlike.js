const express = require('express');
const router = express.Router();
const db = require('../models');
const { Commentlike } = db;

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
    Commentlike.findAll({})
    .then(commentlike => res.json(commentlike));
});


router.post('/', (req, res) => {
  let cont = req.body;
  
  Commentlike.create({
    userId: cont.userid,
    commentId: cont.commetid
   })
    .then(commentlike => {
      res.status(201).json(commentlike);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Commentlike.findByPk(id)
    .then(commentlike => {
      if(!commentlike) {
        return res.sendStatus(404);
      }

      res.json(commentlike);
    });
});


/*router.put('/:id', (req, res) => {
  const { id } = req.params;
  Commentlike.findByPk(id)
    .then(commentlike => {
      if(!commentlike) {
        return res.sendStatus(404);
      }

      commentlike.update({
        content: cont.content
      })

      commentlike.save()
        .then(commentlike => {
          res.json(commentlike);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});
*/

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Commentlike.findByPk(id)
    .then(commentlike => {
      if(!commentlike) {
        return res.sendStatus(404);
      }

      commentlike.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted commentlike with id" + id
      })
    });
});


module.exports = router;