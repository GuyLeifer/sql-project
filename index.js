const express = require('express');
var mysql = require('mysql');
const app = express();
require('dotenv/config');

app.use(express.json());
app.use(logger);

function logger (req, res, next) {
    console.log('request fired ' + req.url + ' ' + req.method);
    next();
}

// Create Connection
let mysqlCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
  });

  //Connect
mysqlCon.connect(err => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connected!");
});

app.get('/songs', (req, res) => {
    mysqlCon.query('SELECT * FROM songs', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

// GET Methods for Top
app.get('/top_songs', (req, res) => {
    mysqlCon.query('SELECT * FROM Songs LIMIT 20', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
})
app.get('/top_artists', (req, res) => {
    mysqlCon.query('SELECT * FROM Artists LIMIT 20', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
})
app.get('/top_albums', (req, res) => {
    mysqlCon.query('SELECT * FROM Albums LIMIT 20', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
})
app.get('/top_playlist', (req, res) => {
    mysqlCon.query('SELECT * FROM Playlists LIMIT 20', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
})

// GET Methods by ID
app.get('/song/:id', async (req, res) =>{
    mysqlCon.query('call SongArtistAlbum(?)',[req.params.id,], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/artist/:id', async (req, res) =>{
    mysqlCon.query('call ArtistAlbumsSongs(?)',[req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results[0]);
      });
});

app.get('/album/:id', async (req, res) =>{
    mysqlCon.query('call AlbumArtistSongs(?)',[req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results[0]);
      });
});

app.get('/albums/:id', async (req, res) =>{
    mysqlCon.query('call ArtistAlbums(?)',[req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results[0]);
      });
});

app.get('/playlist/:id', async (req, res) =>{
    mysqlCon.query('SELECT * FROM playlists WHERE playlist_id = ?',[req.params.id,], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

// POST Methods
app.post('/song', async (req, res) =>{
    mysqlCon.query('INSERT INTO songs SET ?',req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/artist', async (req, res) =>{
    mysqlCon.query('INSERT INTO artists SET ?',req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/album', async (req, res) =>{
    mysqlCon.query('INSERT INTO albums SET ?',req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/playlist', async (req, res) =>{
    mysqlCon.query('INSERT INTO playlists SET ?',req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/user', async (req, res) =>{
    mysqlCon.query('INSERT INTO users SET ?',req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

// PUT Methods
app.put('/song/:id', async (req, res) =>{
    mysqlCon.query(`UPDATE songs SET ? WHERE song_id = ${req.params.id}`,
    [req.body], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/artist/:id', async (req, res) =>{
    mysqlCon.query(`UPDATE artists SET ? WHERE artist_id = ${req.params.id}`,
    [req.body], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
app.put('/album/:id', async (req, res) =>{
    mysqlCon.query(`UPDATE albums SET ? WHERE album_id = ${req.params.id}`,
    [req.body], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
app.put('/playlist/:id', async (req, res) =>{
    mysqlCon.query(`UPDATE songs SET ? WHERE playlist_id = ${req.params.id}`,
    [req.body], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

// DELETE Methods
app.delete('/song/:id', async (req, res) =>{
    mysqlCon.query('DELETE FROM songs WHERE song_id = ?',[req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/artist/:id', async (req, res) =>{
    mysqlCon.query('DELETE FROM artists WHERE artist_id = ?',[req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/album/:id', async (req, res) =>{
    mysqlCon.query('DELETE FROM albums WHERE album_id = ?',[req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/playlist/:id', async (req, res) =>{
    mysqlCon.query('DELETE FROM playlists WHERE playlist_id = ?',[req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});


app.listen(8080, () => {
    console.log('Server Started On Port 8080')
})
