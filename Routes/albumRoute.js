const { Router } = require('express');
const { Album, Song, Artist } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allAlbums = await Album.findAll({
    include: [{model: Artist}, {model: Song}]
  });
  res.json(allAlbums);
});

router.get('/:albumId', async (req, res) => {
    const album = await Album.findByPk(req.params.albumId , {
      include: [{model: Artist}, {model: Song}]
    });
    res.json(album)
  })
  
  router.post('/', async (req, res) => {
    const album = await Album.create({
      Name: req.body.Name,
      ArtistId: req.body.ArtistId,
      Cover_img: req.body.Cover_img, 
      createdAt: req.body.createdAt, 
      updatedAt: new Date()
    });
    res.json(album)
  })

  router.patch('/:albumId', async (req, res) => {
    const album = await Album.findByPk(req.params.albumId);
    await album.update(req.body);
    res.json(artist)
  })
  
  router.delete('/:albumId', async (req, res) => {
    const album = await Album.findByPk(req.params.albumId);
    await album.destroy();
    res.json({ deleted: true })
  })


module.exports = router;
