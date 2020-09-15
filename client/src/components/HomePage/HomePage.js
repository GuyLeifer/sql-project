import React from 'react';
import TopSongs from './TopSongs';
import TopArtists from './TopArtists';
import TopAlbums from './TopAlbums';
import TopPlaylists from './TopPlaylists';

function HomePage() {
    return (
        <div className="homepage">
            <TopSongs />
            <TopArtists />
            <TopAlbums />
            <TopPlaylists />
        </div>
    )
}

export default HomePage
