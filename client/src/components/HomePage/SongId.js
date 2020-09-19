import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function SongId(match) {
    console.log("match: ", match);
    const [song, setSong] = useState({});

    useEffect(() => {
        fetchSong();
    }, []);

    const fetchSong = async() => {
        const { data } = await axios.get(`/song/${match.match.params.id}`);
        console.log("data: ", data)
        setSong(data[0][0]);
    }
    console.log("song: ", song)

    return (
        <>
        {song && (
            <div className="info">
                <div>Song Title: {song.Title}</div>
                <Link to = {`/artist/${song.Artist_id}`}>
                    <div>Artist Name: {song.Artist_name}</div>
                </Link>
                <Link to = {`/album/${song.Album_id}`}>
                    <div>Album Name: {song.Album_name}</div>
                </Link>
                <div>Created At: {song.Song_Created_at}</div>
                <div>Upload At: {song.Song_Upload_at}</div>
                <div>Length: {song.Length}</div>
                <div>Lyrics: <br />{song.Lyrics}</div>
                <div>YouTube Link: 
                    <div>
                        <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default SongId