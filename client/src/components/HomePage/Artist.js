import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtistId from './ArtistId';

function Artist({artist}) {
    const [artistID, setArtistID] = useState("");
    const [artistIdentity, setArtistIdentity] = useState("");
    

    useEffect(() => {
        (async() => {
            try {
            console.log(artistID);
            const { data } = await axios.get(`/artist/${artistID}`);
            setArtistIdentity(data);
            return <ArtistId artist={data}/>
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [artistID])

    return (
        <>
        <div className="artist" onClick={() => setArtistID(artist.Artist_id)}>
           <span className="artistName">{artist.Name}</span>
           <img className="artistImg" src={artist.Cover_img}/>
        </div>
        {/* <ArtistId artist={artistIdentity}/> */}
        </>
    )
}

export default Artist;