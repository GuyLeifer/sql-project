import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';
import Playlist from './Playlist';

function SongId(match) {
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [album, setAlbum] = useState(null);
    const [playlist, setPlaylist] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [playlistID, setPlaylistID] = useState(1);

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
    useEffect(() => {
        fetchPlaylists();
    }, []);

    const fetchSong = async() => {
        const { data } = await axios.get(`/song/${match.match.params.id}`);
        setSong(data[0][0]);
    }
    const fetchArtist = async() => {
        if (match.location.search.substring(1, 7) === "artist") {
            console.log("artist search: ", match.location.search.substring(1, 7))
        const { data } = await axios.get(`/artist/${Number(match.location.search.substring(8))}`);
        setArtist(data);
        }
    }
    const fetchAlbum = async() => {
        if (match.location.search.substring(1, 6) === "album") {
        const { data } = await axios.get(`/album/${Number(match.location.search.substring(7))}`);
        setAlbum(data);
        }
    }
    const fetchPlaylist = async() => {
        if (match.location.search.substring(1, 9) === "playlist") {
        const { data } = await axios.get(`/playlist/${Number(match.location.search.substring(10))}`);
        setPlaylist(data);
        }
    }
    const fetchPlaylists = async() => {
        const { data } = await axios.get(`/top_playlist`);
        console.log("data: ", data)
        setPlaylists(data)
        console.log("playlists: ", playlists)
    }
    const addPlaylistID = async() => {
        await setPlaylistID(document.getElementById("mySelect").value);
    }

    const addToPlaylist = async(playlistId, songId) => {
        await axios.post('/playlist', {
            "Playlist_id": Number(playlistId),
            "Song_id": songId,
        });
    }

    
    return (
        <>
        {song && (
            <div className="info">
                <div>Song Title: {song.Title}</div>
                {playlists && (
                    <form onSubmit={() => addToPlaylist(playlistID, song.Song_id, song.Album_id, song.Artist_id, song.YouTube_Link, song.Title, song.Length, song.Track_Number, song.Lyrics, song.Song_Created_at, song.Song_Upload_at)}> Add To Playlist
                        <select id="mySelect" onChange={() => addPlaylistID()}>
                            {playlists.map(playlist => {
                                return (
                                    <option value={playlist.Playlist_id}>{playlist.Playlist_id}. {playlist.Name}</option>
                                )
                            })}
                        </select>
                        <input id="inputSubmit" type="submit" value="ADD"/>
                    </form>
                )}
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
                            <h4>Playlist Name: {playlist[0].Playlist_name}
                                <Link to = {`playlist/${playlist[0].Playlist_id}`}>
                                    <div>
                                        Go To Playlist - {playlist[0].Playlist_name}
                                    </div>
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
                
            </div>
        )}
        </>
    )
}

export default SongId