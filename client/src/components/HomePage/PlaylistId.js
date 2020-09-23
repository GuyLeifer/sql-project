import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';
import YouTube from 'react-youtube';

function PlaylistId(match) {
    console.log("match: ", match);
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        fetchPlaylist();
    }, []);

    const fetchPlaylist = async() => {
        const { data } = await axios.get(`/playlist/${match.match.params.id}`);
        console.log("data: ", data)
        setPlaylist(data);

    }
    console.log("playlist: ", playlist)

    const opts = {
        height: '160',
        width: '260',
    }

    return (
        <>
        {playlist && (
            <div className="info">
                <div>Playlist Name: {playlist[0].Playlist_name}</div>
                <div>Created At: {playlist[0].Playlist_Created_at}</div>
                <div>Upload At: {playlist[0].Playlist_Upload_at}</div>
                <div>
                    <h3>Cover Image:</h3>
                    <img src={playlist[0].Cover_img}/>
                </div>
                <div>
                    <h3>Songs:</h3>
                    <Carousel
                    center
                    infinite
                    showArrows
                    showIndicator
                    slidesToShow={3}>
                        {playlist.map((song) => {
                            return (
                                <Link to={`/song/${song.Song_id}?playlist=${song.Playlist_id}`}> 
                                    <p>{song.Title}</p>
                                    <YouTube videoId={song.YouTube_Link} opts={opts} />
                                    {/* <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>                            */}
                                </Link>  
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        )}
        </>
    )
}

export default PlaylistId