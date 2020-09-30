const { Router } = require('express');
const { Song, Interaction, User } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allInteractions = await Interaction.findAll({
    include: [{ model: User }, { model: Song }]
  });
    res.json(allInteractions);
});

router.get('/:interactionId', async (req, res) => {
  const interaction = await Interaction.findByPk(req.params.interactionId, {
    include: [{ model: User }, { model: Song }]
  });
  res.json(interaction)
})

router.post('/', async (req, res) => {
  const interaction = await Interaction.create({
    UserId: req.body.UserId, 
    SongId: req.body.SongId, 
    is_liked: req.body.is_liked, 
    createdAt: req.body.createdAt,
    updatedAt: new Date()
  });
  res.json(interaction)
})

router.patch('/:interactionId', async (req, res) => {
  const interaction = await Interaction.findByPk(req.params.interactionId);
  await interaction.update(req.body);
  res.json(interaction)
})

router.delete('/:interactionId', async (req, res) => {
  const interaction = await Interaction.findByPk(req.params.interactionId);
  await interaction.destroy();
  res.json({ deleted: true })
})

module.exports = router;
