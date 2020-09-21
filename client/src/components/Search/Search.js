import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Search() {

    const [songs, setSongs] = useState(null);
    const [artists, setArtists] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/songs');
            console.log(data)
            setSongs(data);
            console.log("songs: ", songs)
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/artists');
            console.log(data)
            setArtists(data);
            console.log("artists: ", artists)
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/albums');
            console.log(data)
            setAlbums(data);
            console.log("albums: ", albums)
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])
    useEffect(() => {
        (async () => {
            try {
            const { data } = await axios.get('/playlists');
            console.log(data)
            setPlaylists(data);
            console.log("playlists: ", playlists)
            }
            catch(err) {
                console.log(err.massage);
            }
        })()
    }, [])

    const SearchSomething = (e) => {
        console.log(e)
    }


    return (
        <div>
            <form id="searchForm" onSubmit={(e) => SearchSomething(e)}>
                <h3>What Are You Looking For?</h3>
                <div id="searchDiv">
                    <input type="radio" name="option" id="song" value="song" />
                    <label for="song">Song</label>
                    <input type="radio" name="option" id="artist" value="artist" />
                    <label for="artist">Artist</label>
                    <input type="radio" name="option" id="album"value="album" />
                    <label for="album">Album</label>
                    <input type="radio" name="option" id="playlist" value="playlist" />
                    <label for="playlist">Playlist</label>
                </div>
                <input type="search" name="search" onChange={(e) => console.log(e.target.value)}/><br /><br />
                <input type="submit" value="submit"/>
            </form>
        </div>
 
    )
}

export default Search
