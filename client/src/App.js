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
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      {/* <Login /> */}
      <Switch>
        <Route path="/about" exact component = {About} />
        <Route path="/top_songs" exact component = {TopSongs} />
        <Route path="/top_artists" exact component = {TopArtists} />
        <Route path="/top_albums" exact component = {TopAlbums} />
        <Route path="/top_playlists" exact component = {TopPlaylists} />
        <Route path="/" exact component = {HomePage} />
        <Route path="/artist/:id" exact component = {ArtistId}/>
        <Route path="/album/:id" exact component = {AlbumId}/>
        <Route path="/album/:id?artist=:id" exact component = {ArtistId}/>
        <Route path="/song/:id" exact component = {SongId}/>
        <Route path="/playlist/:id" exact component = {PlaylistId}/>
      {/* <Route path='*' exact={true} component={GenericNotFound}/> */}
      </Switch>
    </Router>
  );
}

export default App;
