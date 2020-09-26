import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';
import YouTube from 'react-youtube';

function AlbumId(match) {
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        fetchAlbum();
    }, []);

    const fetchAlbum = async() => {
        const { data } = await axios.get(`/albums/${match.match.params.id}`);
        setAlbum(data);
    }

    const opts = {
        height: '160',
        width: '260',
    }   

    return (
        <>
        {album && (
            <div className="info">
                <div>Album Name: {album.Name}</div>
                <Link to = {`/artist/${album.ArtistId}`}>
                    Artist Name: {album.Artist.Name}
                </Link>
                <div>Created At: {album.createdAt}</div>
                <div>Updated At: {album.updatedAt}</div>
                <div><h3>Cover Image:</h3> 
                    <div>
                        <img src={album.Cover_img} alt={album.Name}/>
                    </div>
                </div>
                <div className="songsOnAlbum">
                    <h3>Songs:</h3>
                    <Carousel
                    center
                    infinite
                    showArrows
                    showIndicator
                    slidesToShow={3}>
                    {album.Songs.map((song) => {
                        return (
                            <Link to={`/song/${song.id}?album=${song.AlbumId}`}> 
                                <p>{song.Title}</p>
                                <YouTube videoId={song.YouTube_Link} opts={opts} />
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

export default AlbumId