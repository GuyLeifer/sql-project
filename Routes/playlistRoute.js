const { Router } = require('express');
const { Playlist } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allPlaylists = await Playlist.findAll({
  });
  return res.json(allPlaylists);
});

router.get('/:playlistId', async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.playlistId , {
  });
  res.json(playlist)
})

router.post('/', async (req, res) => {
  const playlist = await Playlist.create({
    Name: req.body.Name,
    Cover_img: req.body.Cover_img, 
    createdAt: req.body.createdAt, 
    updatedAt: new Date()
  });
  res.json(playlist)
})

router.patch('/:playlistId', async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.playlistId);
  await playlist.update(req.body);
  res.json(playlist)
})

router.delete('/:playlistId', async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.playlistId);
  await playlist.destroy();
  res.json({ deleted: true })
})


module.exports = router;
