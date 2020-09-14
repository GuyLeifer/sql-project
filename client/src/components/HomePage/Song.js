import React from 'react';
import YouTube from 'react-youtube';

function Song({song}) {
    function goToLink(link) {
        console.log(link)
        const opts = {
            height: '390',
            width: '640',
            autoplay: 1,
            };
        return <YouTube
            videoId={link}
            opts={opts}
        />
    }
    return (
        <div className="song" onClick= {() => goToLink(song.YouTube_Link)}>
           <span className="songTitle">{song.Title}</span> 
           <span className="songLength">{song.Length}</span>
        </div>
    )
}

export default Song
