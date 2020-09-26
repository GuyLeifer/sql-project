import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Artist({artist}) {

    return (
        <>
        <Link to = {`/artist/${artist.id}`}>
            <div className="artist">
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