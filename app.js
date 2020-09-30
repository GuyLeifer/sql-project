const express = require('express')

const app = express()
app.use(express.json())

app.use('/songs', require('./Routes/songRoute'));
app.use('/albums', require('./Routes/albumRoute'));
app.use('/artists', require('./Routes/artistRoute'));
app.use('/playlists', require('./Routes/playlistRoute'));
app.use('/playlistsongs', require('./Routes/playlistSongsRoute'));
app.use('/users', require('./Routes/userRoute'));
app.use('/interactions', require('./Routes/interactionRoute'));

app.get('/', (req, res) => {
  res.send('You entered to the Server Port!')
})

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})


module.exports = app;