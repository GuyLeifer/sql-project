import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';
import YouTube from 'react-youtube';

function PlaylistId(match) {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        fetchPlaylist();
    }, []);

    const fetchPlaylist = async() => {
        const { data } = await axios.get(`/playlistsongs`);
        const playlistSongs = data.filter((item) => item.PlaylistId == match.match.params.id);
        setPlaylist(playlistSongs);
    }

    const opts = {
        height: '160',
        width: '260',
    }

    return (
        <>
        {playlist && (
            <div className="info">
                <div>Playlist Name: {playlist[0].Playlist.Name}</div>
                <div>Created At: {playlist[0].Playlist.createdAt}</div>
                <div>Updated At: {playlist[0].Playlist.updatedAt}</div>
                <div>
                    <h3>Cover Image:</h3>
                    <img src={playlist[0].Playlist.Cover_img}/>
                </div>
                <div>
                    <h3>Songs:</h3>
                    <Carousel
                    center
                    infinite
                    showArrows
                    showIndicator
                    slidesToShow={3}>
                        {playlist.map((item) => {
                            return (
                                <Link to={`/song/${item.Song.id}?playlist=${item.PlaylistId}`}> 
                                    <p>{item.Song.Title}</p>
                                    <YouTube videoId={item.Song.YouTube_Link} opts={opts} />
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