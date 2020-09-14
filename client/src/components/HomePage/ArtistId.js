import React from 'react'

function ArtistId(artist) {
    return (
        <div>
            <div>Artist Name: {artist.Name}</div>
            <div>Created At: {artist.Created_at}</div>
            <div>Upload At: {artist.Upload_at}</div>
            <div>Cover Image: {artist.Cover_img}</div>
        </div>
    )
}

export default ArtistId
