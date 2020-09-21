import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import HomePage from './components/HomePage/HomePage';
import Nav from './components/HomePage/Nav';
import About from './components/HomePage/About';
import ArtistId from './components/HomePage/ArtistId';
import AlbumId from './components/HomePage/AlbumId';
import SongId from './components/HomePage/SongId';
import PlaylistId from './components/HomePage/PlaylistId';
import GenericNotFound from './components/GenericNotFound';
import TopSongs from './components/HomePage/TopSongs';
import TopArtists from './components/HomePage/TopArtists';
import TopAlbums from './components/HomePage/TopAlbums';
import TopPlaylists from './components/HomePage/TopPlaylists';
import Adding from './components/Adding/Adding';
import AddArtist from './components/Adding/AddArtist';
import AddAlbum from './components/Adding/AddAlbum';
import AddSong from './components/Adding/AddSong';
import AddPlaylist from './components/Adding/AddPlaylist';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      {/* <Login /> */}
      <Switch>
        <Route path="/" exact component = {HomePage} />
        <Route path="/about" exact component = {About} />
        <Route path="/top_songs" exact component = {TopSongs} />
        <Route path="/top_artists" exact component = {TopArtists} />
        <Route path="/top_albums" exact component = {TopAlbums} />
        <Route path="/top_playlists" exact component = {TopPlaylists} />
        <Route path="/artist/:id" exact component = {ArtistId}/>
        <Route path="/album/:id" exact component = {AlbumId}/>
        <Route path="/song/:id" component = {SongId}/>
        <Route path="/playlist/:id" exact component = {PlaylistId}/>
        <Route path="/add" exact component = {Adding}/>
        <Route path="/add/artist" exact component = {AddArtist}/>
        <Route path="/add/album" exact component = {AddAlbum}/>
        <Route path="/add/song" exact component = {AddSong}/>
        <Route path="/add/playlist" exact component = {AddPlaylist}/>
        <Route path='*' exact={true} status={404} component={GenericNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
