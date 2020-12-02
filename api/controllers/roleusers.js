const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Roleuser } = db;

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
    Roleuser.findAll({})
    .then(roleuser => res.json(roleuser));
});


router.post('/',passport.isAuthenticated(), (req, res) => {
  let cont = req.body;
  
  Roleuser.create({
    name: cont.name
   })
    .then(roleuser => {
      res.status(201).json(roleuser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Roleuser.findByPk(id)
    .then(roleuser => {
      if(!roleuser) {
        return res.sendStatus(404);
      }

      res.json(roleuser);
    });
});


/*router.put('/:id', (req, res) => {
  const { id } = req.params;
  Roleuser.findByPk(id)
    .then(roleuser => {
      if(!roleuser) {
        return res.sendStatus(404);
      }

      roleuser.update({
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
*/

router.delete('/:id',passport.isAuthenticated(), (req, res) => {
  const { id } = req.params;
  Roleuser.findByPk(id)
    .then(roleuser => {
      if(!roleuser) {
        return res.sendStatus(404);
      }

      roleuser.destroy();
      res.status(204)
      .json({
        message: "Successfully deleted role with id" + id
      })
    });
});


module.exports = router;