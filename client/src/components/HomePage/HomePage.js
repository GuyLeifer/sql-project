import React from 'react';
import TopSongs from './TopSongs';
import TopArtists from './TopArtists';
import TopAlbums from './TopAlbums';
import TopPlaylists from './TopPlaylists';
import Adder from '../Adding/Adder';

function HomePage() {
    return (
        <div className="homepage">
            <TopSongs />
            <TopArtists />
            <TopAlbums />
            <TopPlaylists />
            <Adder />
        </div>
    )
}

export default HomePage
