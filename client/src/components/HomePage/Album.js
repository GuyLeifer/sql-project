import React from 'react'

function Album({album}) {
    return (
        <div className="album">
           <span className="albumName">{album.Name}</span> 
        </div>
    )
}

export default Album;
