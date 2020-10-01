require('dotenv').config();
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { User } = require('../models');

const router = Router();
router.use(cookieParser());

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '24h',
  })
}

// handle errors
const handleErrors = (err) => {
  if (err.errors === undefined) {
    const error = "Something go Wrong, Try Again";
    return error;
  }
  else {
    if (err.errors[0].message == "users.Email must be unique") {
      const error = "Email is not Available";
      return error;
    } else if ((err.errors[0].message == "users.Name must be unique")) {
      const error = "Username is not Available";
      return error;
    }
  }
}


router.get('/', async (req, res) => {
  const allUsers = await User.findAll({
  });
  res.json(allUsers);
});

router.get('/:userId', async (req, res) => {
    const user = await User.findByPk(req.params.userId , {
    });
    res.json(user)
  })

router.get('/:userName/:password', async (req, res) => {
  console.log(req.params.userName);
  console.log(req.params.password);
    const user = await User.findOne({ where: { 
      Name: req.params.userName,
      Password: req.params.password 
    }
    });
    res.json(user)
  })
  
  router.post('/signup', async (req, res) => {
    const { Name, Email, Password, isAdmin, Preferences, Remember_Token, createdAt } = req.body;

    try {
      const user = await User.create({ Name, Email, Password, isAdmin, Preferences, Remember_Token, createdAt });
      const token = createToken(user.id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      res.status(201).json(user);
    }
    catch(err) {
      const error = handleErrors(err);
      res.send({ error });
    }
  })

  router.post('/login', async (req, res) => {
    const { Name, Password } = req.body;

    try {
      const user = await User.findOne({ where: { 
        Name: Name,
        Password: Password 
      }
      });
      const token = createToken(user.id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      res.status(201).json(user);
    }
    catch(err) {
      const error = handleErrors(err);
      res.send({ error });
    }
  })

  router.patch('/:userId', async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    await user.update(req.body);
    res.json(user)
  })
  
  router.delete('/:userId', async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.json({ deleted: true })
  })


module.exports = router;