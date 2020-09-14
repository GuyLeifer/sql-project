import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import TopSongs from './components/TopSongs';
import TopArtists from './components/TopArtists';
import TopAlbums from './components/TopAlbums';
import TopPlaylists from './components/TopPlaylists';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Login />
      <div className="App">
        <TopSongs />
        <TopArtists />
        <TopAlbums />
        <TopPlaylists />
      </div>
    </>
  );
}

export default App;
