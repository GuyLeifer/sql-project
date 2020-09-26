import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';
import YouTube from 'react-youtube';

function ArtistId(match) {
    console.log("match: ", match);
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        fetchArtist();
    }, []);


    const fetchArtist = async() => {
        const { data } = await axios.get(`/artists/${match.match.params.id}`);
        console.log("data :" , data)
        setArtist(data);
        console.log("artist: ",artist)
    }
  

    const opts = {
        height: '160',
        width: '260',
    }    
    
    return (
        <>
            {artist && (
        <div className="info">
            <div>Artist Name: {artist.Name}</div>
            <div>Created At: {artist.createdAt}</div>
            <div>Updated At: {artist.updatedAt}</div>
            <div>Cover Image: 
                <div>
                    <img src={artist.Cover_img} alt={artist.Name} />
                </div>
            </div>
            <div>
            <h3>Songs:</h3>
                <Carousel
                center
                infinite
                showArrows
                showIndicator
                slidesToShow={5}>
                {artist.Songs.map((song) => {
                    return (
                        <Link to={`/song/${song.id}?artist=${song.ArtistId}`}>
                            <div className="songOnArtist">  
                                        <p>{song.Title}</p>
                                        <YouTube videoId={song.YouTube_Link} opts={opts} />
                            </div>
                        </Link>
                    )
                })}
                </Carousel>
                <div>
                    <h3>Albums:</h3>
                    <Carousel
                     center
                     infinite
                     showArrows
                     showIndicator
                     slidesToShow={3}>
                        {artist.Albums.map((album) => {
                            return (
                                <Link to={`/album/${album.id}?artist=${album.ArtistId}`}>
                                    <div className="albumOnArtist">
                                        <p>{album.Name}</p>
                                        <div>
                                            <img src={album.Cover_img} alt={album.Name}/>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
            </div>
            )}
</>
    )
}

export default ArtistId
