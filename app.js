const express = require('express')
const cookieParser = require('cookie-parser');
const { requireAuth } = require ('./Routes/Middleware/authMiddleware');

const app = express()

// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/songs', requireAuth, require('./Routes/songRoute'));
app.use('/albums', requireAuth, require('./Routes/albumRoute'));
app.use('/artists', requireAuth, require('./Routes/artistRoute'));
app.use('/playlists', requireAuth, require('./Routes/playlistRoute'));
app.use('/playlistsongs', requireAuth, require('./Routes/playlistSongsRoute'));
app.use('/users', require('./Routes/userRoute'));
app.use('/interactions', requireAuth, require('./Routes/interactionRoute'));

app.get('/', (req, res) => {
  res.send('You entered to the Server Port!')
})

//tests
app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})

// cookies

// app.get('/set-cookies', (req, res) => {
  
//   // res.setHeader('Set-Cookie', 'newUser=true');
//   res.cookie('newUser', false);
//   res.cookie('isEmployee', true, {
//     maxAge: 1000 * 60 * 60 * 24,
//     secure: true
//   });
//   res.send('You got the cookies');
// })

// app.get('/read-cookies', (req, res) => {

//   const cookies = req.cookies;
//   console.log(cookies);

//   res.json(cookies);
// })


module.exports = app;