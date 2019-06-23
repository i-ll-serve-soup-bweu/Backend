const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../auth/token.js');

const Users = require('../data/models/user-model.js');

router.post('/', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          username: user.username,
          userID: user.id,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
