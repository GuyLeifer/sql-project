import React from 'react'

function Artist({artist}) {
    return (
        <div className="artist">
           <span className="artistName">{artist.Name}</span>
        </div>
    )
}

export default Artist;