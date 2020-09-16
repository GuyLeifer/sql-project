import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Artist({artist}) {
    const [artistID, setArtistID] = useState("");

    return (
        <>
        <Link to = {`/artist/${artist.Artist_id}`}>
            <div className="artist" onClick={() => setArtistID(artist.Artist_id)}>
               <span className="artistName">{artist.Name}</span>
               <img className="artistImg" src={artist.Cover_img}/>
            </div>
        </Link>
        </>
    )
}

export default Artist;