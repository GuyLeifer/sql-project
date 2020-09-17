import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Artist({artist}) {
    const [artistID, setArtistID] = useState("");
    console.log("artist: ", artist)

    return (
        <>
        <Link to = {`/artist/${artist.Artist_id}`}>
            <div className="artist" onClick={() => setArtistID(artist.Artist_id)}>
               <span className="artistName">{artist.Name}</span>
               <div className="artistImg">
                    <img src={artist.Cover_img}/>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Artist;