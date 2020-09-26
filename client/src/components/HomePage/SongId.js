import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'styled-components-carousel';
import YouTube from 'react-youtube';

function SongId(match) {
    console.log(match)
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

    const fetchSong = async(id = match.match.params.id) => {
        const { data } = await axios.get(`/songs/${id}`);
        console.log("data: ", data)
        setSong(data);
    }
    const fetchArtist = async() => {
        if (match.location.search.substring(1, 7) === "artist") {
            console.log("artist search: ", match.location.search.substring(1, 7))
        const { data } = await axios.get(`/artists/${Number(match.location.search.substring(8))}`);
        setArtist(data);
        }
    }
    const fetchAlbum = async() => {
        if (match.location.search.substring(1, 6) === "album") {
        const { data } = await axios.get(`/albums/${Number(match.location.search.substring(7))}`);
        setAlbum(data);
        }
    }
    const fetchPlaylist = async() => {
        if (match.location.search.substring(1, 9) === "playlist") {
        const { data } = await axios.get(`/playlistsongs`);
        const playlistSongs = data.filter((item) => item.PlaylistId === Number(match.location.search.substring(10)) && item.SongId !== Number(match.match.params.id));
        console.log("playlist songs: ", playlistSongs)
        setPlaylist(playlistSongs);
        }
    }
    const fetchPlaylists = async() => {
        const { data } = await axios.get(`/playlists`);
        console.log("data: ", data)
        setPlaylists(data)
        console.log("playlists: ", playlists)
    }
    const addPlaylistID = async() => {
        await setPlaylistID(document.getElementById("mySelect").value);
    }

    const addToPlaylist = async(playlistId, songId) => {
        await axios.post('/playlistsongs', {
            "PlaylistId": Number(playlistId),
            "SongId": songId,
        });
    }

    const renderPage = (songId, playlistId) => {
        fetchSong(songId);
        fetchPlaylist(playlistId);
    };

    const optsForMainSong = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
          },
    }
    const optsForOtherSong = {
        height: '160',
        width: '260',
        // playerVars: {
        //     autoplay: 1,
        //   },
    }

    return (
        <>
        {song && (
            <div className="info">
                <div>Song Title: {song.Title}</div>
                <div>
                    <YouTube videoId={song.YouTube_Link} opts={optsForMainSong} /> 
                    {/* <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/> */}
                </div>
                {playlists && (
                    <form onSubmit={() => addToPlaylist(playlistID, song.id)}> Add To Playlist
                        <select id="mySelect" onChange={() => addPlaylistID()}>
                            {playlists.map(playlist => {
                                return (
                                    <option value={playlist.id}>{playlist.id}. {playlist.Name}</option>
                                )
                            })}
                        </select>
                        <input id="inputSubmit" type="submit" value="ADD"/>
                    </form>
                )}
                <Link to = {`/artist/${song.ArtistId}`}>
                    <div>Artist Name: {song.Artist.Name}</div>
                </Link>
                <Link to = {`/album/${song.AlbumId}`}>
                    <div>Album Name: {song.Album.Name}</div>
                </Link>
                <div>Created At: {song.createdAt}</div>
                <div>Updated At: {song.updatedAt}</div>
                <div>Length: {song.Length}</div>
                <div>Lyrics: <br />{song.Lyrics}</div>
                <>
                    {artist && (
                        <div>
                            <h3>Songs From Artist:</h3>
                            <h4>Artist Name: {artist.Name}
                                <Link to = {`/artist/${artist.id}`}>
                                    <div>
                                        Go To Artist - {artist.Name}
                                    </div>
                                    <img src={artist.Cover_img} />
                                </Link>
                            </h4>
                            <Carousel
                                center
                                infinite
                                showArrows
                                showIndicator
                                slidesToShow={3}>
                                    {artist.Songs.map((song) => {
                                        return (
                                            <div>
                                                <Link to = {`/song/${song.id}?artist=${song.ArtistId}`}>
                                                    <div>{song.Title}</div>
                                                    <YouTube videoId={song.YouTube_Link} opts={optsForOtherSong} />
                                                    {/* <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/> */}
                                                </Link>
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
                            <h4>Album Name: {album.Name}
                                <Link to = {`/album/${album.id}`}>
                                    <div>
                                        Go To Album - {album.Name}
                                    </div>
                                    <img src={album.Cover_img} />
                                </Link>
                            </h4>
                            <Carousel
                                center
                                infinite
                                showArrows
                                showIndicator
                                slidesToShow={3}>
                                    {album.Songs.map((song) => {
                                        return (
                                            <div>
                                                <Link to = {`/song/${song.id}?album=${song.AlbumId}`}>
                                                    <div>{song.Title}</div>
                                                    <YouTube videoId={song.YouTube_Link} opts={optsForOtherSong} />
                                                    {/* <iframe src={`https://www.youtube.com/embed/${song.YouTube_Link}`}/> */}
                                                </Link>
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
                            <h4>Playlist Name: {playlist[0].Playlist.Name}
                                <Link to = {`/playlist/${playlist[0].PlaylistId}`}>
                                    <div>
                                        Go To Playlist - {playlist[0].Playlist.Name}
                                    </div>
                                    <img src={playlist[0].Playlist.Cover_img} />
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
                                            <div onClick={() => {renderPage(song.SongId, song.PlaylistId)}}>
                                                <Link to = {`/song/${song.SongId}?playlist=${song.PlaylistId}`}>
                                                    <div>{song.Song.Title}</div>
                                                    <YouTube videoId={song.Song.YouTube_Link} opts={optsForOtherSong} />
                                                </Link>
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