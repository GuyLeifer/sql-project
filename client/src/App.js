import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import HomePage from './components/HomePage/HomePage';
import Nav from './components/HomePage/Nav';
import Shop from './components/HomePage/Shop'
import About from './components/HomePage/About';
import ArtistId from './components/HomePage/ArtistId';
import AlbumId from './components/HomePage/AlbumId';
import SongId from './components/HomePage/SongId';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      {/* <Login /> */}
      <Route path="/about" exact component = {About} />
      <Route path="/shop" exact component = {Shop} />
      <Route path="/" exact component = {HomePage} />
      <Route path="/artist/:id" exact component = {ArtistId}/>
      <Route path="/album/:id" exact component = {AlbumId}/>
      <Route path="/song/:id" exact component = {SongId}/>
    </Router>
  );
}

export default App;
