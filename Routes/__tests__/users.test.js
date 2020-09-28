const app = require('../../app') // Link to your server file
const request = require('supertest')
// const request = supertest(app)

// Testing to see if Jest works
it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })

// gets the test endpoint
it('gets the test endpoint', async (done) => {
    const response = await request(app).get('/test')
  
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
    done()
  })

  //
it('gets the artist endpoint', async (done) => {
    const response = await request(app).get('/artists')
  
    expect(response.status).toBe(200)
    done()
  })

describe('Can Add New Something', () => {
    it('can add new ARTIST', async (done) => {
        await request(app)
          .post('/artists')
          .send({
              Name: "Guy Leifer",
              Cover_img: "DontHave",
              createdAt: "1996-07-03T00:00:00.000Z"
          })
          .expect(200)
          .then(response => {
              expect(response.body.Name).toBe("Guy Leifer")
              expect(response.body.Cover_img).toBe("DontHave")
              expect(response.body.createdAt).toBe("1996-07-03T00:00:00.000Z")
          });
            done();
          });
  
      it('can add new ALBUM', async (done) => {
        await request(app)
          .post('/albums')
          .send({
              Name: "Guy Leifer",
              ArtistId: 1,
              Cover_img: "DontHave",
              createdAt: "1996-07-03T00:00:00.000Z"
          })
          .expect(200)
          .then(response => {
              expect(response.body.Name).toBe("Guy Leifer")
              expect(response.body.ArtistId).toBe(1)
              expect(response.body.Cover_img).toBe("DontHave")
              expect(response.body.createdAt).toBe("1996-07-03T00:00:00.000Z")
          });
            done();
          });
  
      it('can add new SONG', async (done) => {
        await request(app)
          .post('/songs')
          .send({
              Title: "Guy Leifer",
              ArtistId: 1,
              AlbumId: 1,
              YouTube_Link: "DontHave",
              Track_Number: 1,
              Lyrics: "blablabla",
              createdAt: "1996-07-03T00:00:00.000Z"
          })
          .expect(200)
          .then(response => {
              expect(response.body.Title).toBe("Guy Leifer")
              expect(response.body.ArtistId).toBe(1)
              expect(response.body.AlbumId).toBe(1)
              expect(response.body.YouTube_Link).toBe("DontHave")
              expect(response.body.Track_Number).toBe(1)
              expect(response.body.Lyrics).toBe("blablabla")
              expect(response.body.createdAt).toBe("1996-07-03T00:00:00.000Z")
          });
            done();
          });
  
      it('can add new PLAYLIST', async (done) => {
        await request(app)
          .post('/playlists')
          .send({
              Name: "Guy Leifer",
              Cover_img: "DontHave",
              createdAt: "1996-07-03T00:00:00.000Z"
          })
          .expect(200)
          .then(response => {
              expect(response.body.Name).toBe("Guy Leifer")
              expect(response.body.Cover_img).toBe("DontHave")
              expect(response.body.createdAt).toBe("1996-07-03T00:00:00.000Z")
          });
            done();
          });

      it('can add new PLAYLIST SONGS', async (done) => {
        await request(app)
          .post('/playlistsongs')
          .send({
              PlaylistId: 1,
              SongId: 1,
              createdAt: "1996-07-03T00:00:00.000Z"
          })
          .expect(200)
          .then(response => {
              expect(response.body.PlaylistId).toBe(1)
              expect(response.body.SongId).toBe(1)
              expect(response.body.createdAt).toBe("1996-07-03T00:00:00.000Z")
          });
            done();
          });
});
    

