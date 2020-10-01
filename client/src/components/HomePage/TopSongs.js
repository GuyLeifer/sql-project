import React, { useEffect, useState } from 'react';
import Carousel from 'styled-components-carousel';
import axios from 'axios';
import Song from './Song';
import { Link } from 'react-router-dom';

function TopSongs() {
    const [songs, setSongs] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/songs');
            console.log("data: ", data)
            setSongs(data);
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])

    return (
        <div className="topSongs">
            <Link to='/top_songs'>
                <div className="topHeader">Top Songs</div>
            </Link>
            
            <Carousel         
                center
                infinite
                showArrows
                showIndicator
                slidesToShow={3}>
                {songs.map(song => {
                    return <Song song={song} />
                })} 
            </Carousel>
        </div>   
    )
}

export default TopSongs;

