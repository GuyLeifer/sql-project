const { Router } = require('express');
const { User } = require('../models');

const router = Router();

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
  
  router.post('/', async (req, res) => {
    const user = await User.create({
        Name: req.body.Name,
        Email: req.body.Email, 
        Password: req.body.Password, 
        isAdmin: req.body.isAdmin, 
        Preferences: req.body.Preferences, 
        Remember_Token: req.body.Remember_Token, 
        createdAt: req.body.createdAt,
        updatedAt: new Date()
    });
    res.json(user)
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