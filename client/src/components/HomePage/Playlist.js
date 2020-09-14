import React from 'react'

function Playlist({playlist}) {
    return (
        <div className="playlist">
           <span className="playlistName">{playlist.Name}</span>
        </div>
    )
}

export default Playlist;