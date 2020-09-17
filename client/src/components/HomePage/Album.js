import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Album({album}) {
    const [albumID, setAlbumID] = useState("");

    return (
            <Link to = {`/album/${album.Album_id}`}>
            <div className="album" onClick={() => setAlbumID(album.Album_id)}>
               <span className="albumName">{album.Name}</span> 
            </div>
            </Link>
    )
}

export default Album;