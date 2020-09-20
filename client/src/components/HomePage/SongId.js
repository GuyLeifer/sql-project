import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';
import Playlist from './Playlist';

function SongId(match) {
    console.log("match: ", match);
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [album, setAlbum] = useState(null);
    const [playlist, setPlaylist] = useState(null);
    // const [playlistID, setPlaylistID] = useState(null);

    useEffect(() => {
        fetchSong();
    }, []);
    useEffect(() => {
        fetchArtist();
    }, []);
    useEffect(() => {
        fetchAlbum();
    }, []);
    useEffect(() => {
        fetchPlaylist();
    }, []);


    const fetchSong = async() => {
        const { data } = await axios.get(`/song/${match.match.params.id}`);
        setSong(data[0][0]);
    }
    const fetchArtist = async() => {
        if (match.location.search.substring(1, 7) === "artist") {
            console.log("artist search: ", match.location.search.substring(1, 7))
        const { data } = await axios.get(`/artist/${Number(match.location.search.substring(8))}`);
        console.log("data: ", data)
        setArtist(data);
        }
    }
    const fetchAlbum = async() => {
        if (match.location.search.substring(1, 6) === "album") {
        const { data } = await axios.get(`/album/${Number(match.location.search.substring(7))}`);
        console.log("data: ", data)
        setAlbum(data);
        }
    }
    const fetchPlaylist = async() => {
        if (match.location.search.substring(1, 9) === "playlist") {
        const { data } = await axios.get(`/playlist/${Number(match.location.search.substring(10))}`);
        console.log("data: ", data)
        setPlaylist(data);
        }
    }
   
    // useEffect(() => {
    //     fetchPlaylist();
    // }, []);
    // const fetchPlaylist = async() => {
    //     const { data } = await axios.get(`/top_playlist`);
    //     console.log("data ", data)
    //     setPlaylist(data);
    //     setPlaylistID(data[0].Playlist_id);
    //     console.log("playlist: ", playlist)
    //     console.log("playlistID: ", playlistID)
    // }

    // const addToPlaylist = async(playlistId, songId) => {
    //     // await axios.post('/playlist', {
    //     //     Playlist_id: playlistId,
    //     //     Song_id: SongId
    //     // });
    //     console.log("playlistID: ",playlistId);
    //     console.log("song: ", songId);
    //     debugger;
    // }

    
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
                <>
                    {artist && (
                        <div>
                            <h3>Songs From Artist:</h3>
                            <Carousel
                                center
                                infinite
                                showArrows
                                showIndicator
                                slidesToShow={3}>
                                    {artist.map((song) => {
                                        return (
                                            <div>
                                                <div>{song.Title}</div>
                                                <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>
                                            </div>
                                        )
                                    })}
                            </Carousel>
                        </div>
                    )}
                </>
                <>
                    {album && (
                        <div>
                            <h3>Songs From Album:</h3>
                            <Carousel
                                center
                                infinite
                                showArrows
                                showIndicator
                                slidesToShow={3}>
                                    {album.map((song) => {
                                        return (
                                            <div>
                                                <div>{song.Title}</div>
                                                <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>
                                            </div>
                                        )
                                    })}
                            </Carousel>
                        </div>
                    )}
                </>
                <>
                    {playlist && (
                        <div>
                            <h3>Songs From Same Playlist:</h3>
                            <h4>Playlist Name:  
                                <Link to = {`playlist/${playlist[0].Playlist_id}`}>
                                    {playlist[0].Playlist_name}
                                </Link>
                            </h4>
                            <Carousel
                                center
                                infinite
                                showArrows
                                showIndicator
                                slidesToShow={3}>
                                    {playlist.map((song) => {
                                        return (
                                            <div>
                                                <div>{song.Title}</div>
                                                <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/>
                                            </div>
                                        )
                                    })}
                            </Carousel>
                        </div>
                    )}
                </>
                {/* {playlist && 
                    <form onSubmit={(e) => addToPlaylist(playlistID, song.Song_id)}> Add this Song To Playlist 
                        <select>
                            {playlist.map((playlist) => {
                                return (
                                <option onClick={setPlaylistID(playlist.Playlist_id)}>{playlist.Playlist_id} {playlist.Name}</option>
                                )
                            })}
                        </select>
                        <input type="submit" value="Add"/>
                    </form>
                } */}
            </div>
        )}
        </>
    )
}

export default SongId