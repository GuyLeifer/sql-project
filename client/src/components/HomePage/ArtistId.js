import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';

function ArtistId(match) {
    console.log("match: ", match);
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        fetchArtist();
    }, []);

    const fetchArtist = async() => {
        const { data } = await axios.get(`/artist/${match.match.params.id}`);
        console.log("data :" , data)
        setArtist(data);
        console.log("artist: ",artist)
        // data.map(album => console.log(data.Album_name))
    }
    
    return (
        <>
            {artist && (
        <div className="info">
            <div>Artist Name: {artist[0].Artist_name}</div>
            <div>Created At: {artist[0].Artist_Created_at}</div>
            <div>Upload At: {artist[0].Artist_Upload_at}</div>
            <div>Cover Image: 
                <div>
                    <img src={artist[0].Artist_Cover_img} alt={artist[0].Artist_name} />
                </div>
            </div>
            <div>
            <p>Songs:</p>
                <Carousel
                center
                infinite
                showArrows
                showIndicator
                slidesToShow={5}>
                {artist.map((song) => {
                    return (
                        <Link to={`/song/${song.Song_id}`}>
                            <div className="songOnArtist">  
                                        <p>{song.Title}</p>
                                        {/* <div> */}
                                            <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>
                                        {/* </div> */}
                            </div>
                        </Link>
                    )
                })}
                </Carousel>
                <p>Albums:</p>
                <Carousel
                 center
                 infinite
                 showArrows
                 showIndicator
                 slidesToShow={3}>
                    {}
                </Carousel>
            </div>
            </div>
            )}
</>
    )
}

export default ArtistId
