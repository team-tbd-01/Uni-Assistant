const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');


router.post('/signup', (req, res) => {
  console.log("POST body: ", req.body);
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  })
    .then((user) => {
      console.log("POST body: ", req.body);
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/login',
  passport.authenticate('local'), 
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

router.get('/logged_in', (req, res, next) => {
  auth = req.isAuthenticated()
  if(req.isAuthenticated()){
  res.status(200).json({ message: "Logged in" })
}
  else{
  res.status(400).json({ message: "logged out" });}
});

module.exports = router;