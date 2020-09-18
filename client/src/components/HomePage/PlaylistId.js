import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlaylistId(match) {
    console.log("match: ", match);
    const [playlist, setPlaylist] = useState({});

    useEffect(() => {
        fetchPlaylist();
    }, []);

    const fetchPlaylist = async() => {
        const { data } = await axios.get(`/playlist/${match.match.params.id}`);
        console.log("data: ", data)
        setPlaylist(data[0]);
    }
    console.log("playlist: ", playlist)

    return (
        <>
        {playlist && (
            <div className="info">
                <div>Playlist Name: {playlist.Name}</div>
                <div>Created At: {playlist.Created_at}</div>
                <div>Upload At: {playlist.Upload_at}</div>
                {/* <Link to = {`/song/${playlist.Songs_List}`}>
                    <div>Artist Name: {song.Artist_name}</div>
                </Link>
                <Link to = {`/album/${song.Album_id}`}>
                    <div>Album Name: {song.Album_name}</div>
                </Link>
                
                <div>Length: {song.Length}</div>
                <div>Lyrics: {song.Lyrics}</div>
                <div>YouTube Link: 
                    <div>
                        <iframe src={song.YouTube_Link}/>
                    </div>
                </div> */}
            </div>
        )}
        </>
    )
}

export default PlaylistId