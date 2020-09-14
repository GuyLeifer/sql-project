import React from 'react';
import YouTube from 'react-youtube';

function Song({song}) {
    function goToLink(link) {
        const opts = {
            height: '390',
            width: '640',
            // playerVars: {
            //   // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            };
        return <YouTube
            videoId={song.YouTube_Link}
            opts={opts}
        />
    }
    return (
        <div className="song">
           <span className="songTitle" onClick={goToLink(song.YouTube_Ling)}>{song.Title}</span> 
           <span className="songLength">{song.Length}</span>
        </div>
    )
}

export default Song
