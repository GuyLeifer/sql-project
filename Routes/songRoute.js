const { Router } = require('express');
const { Song, Artist, Album } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allSongs = await Song.findAll({
    include: [{ model: Artist }, { model: Album }]
  });
    res.json(allSongs);
});

router.get('/:songId', async (req, res) => {
  const song = await Song.findByPk(req.params.songId , {
    include: [{ model: Artist }, { model: Album }]
  });
  res.json(song)
})

router.post('/', async (req, res) => {
  const song = await Song.create({
    Title: req.body.Title,
    ArtistId: req.body.ArtistId,
    AlbumId: req.body.AlbumId, 
    YouTube_Link: req.body.YouTube_Link, 
    Length: req.body.Length, 
    Track_Number: req.body.Track_Number, 
    Lyrics: req.body.Lyrics, 
    createdAt: req.body.createdAt, 
    updatedAt: new Date()
  });
  res.json(song)
})

router.patch('/:songId', async (req, res) => {
  const song = await Song.findByPk(req.params.songId);
  await song.update(req.body);
  res.json(song)
})

router.delete('/:songId', async (req, res) => {
  const song = await Song.findByPk(req.params.songId);
  await song.destroy();
  res.json({ deleted: true })
})

module.exports = router;
