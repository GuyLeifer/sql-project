import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Album({album}) {

    return (
            <Link to = {`/album/${album.id}`}>
            <div className="album" >
               <span className="albumName">{album.Name}</span> 
               <div className="albumImg">
                    <img src={album.Cover_img}/>
                </div>
            </div>
            </Link>
    )
}

export default Album;