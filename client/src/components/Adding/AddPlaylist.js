import React from 'react';
import axios from 'axios';

function AddPlaylist({sendData, sendStatus}) {
    const dataToAdd = {};
    const dataToAddToPlaylist = {};

    const inputChange = (e) => {
        addData(e.target)
    } 
    const inputChangeToPlaylist = (e) => {
        addDataToPlaylist(e.target)
    } 

    const addData = ({name,value}) => {
        dataToAdd[name] = value
    }
    const addDataToPlaylist = ({name,value}) => {
        dataToAddToPlaylist[name] = value
    }

    async function sendData(data){
        await axios.post('/playlists/', data)
    }
    async function sendDataToPlaylist(data){
        await axios.post('/playlistsongs/', data)
    }

    const submitChecks = (e)=>{
        e.preventDefault()
        if (!Object.keys(dataToAdd).length) {
            return({status: 'error', message: 'You Have Not Entered Data'})
            
        }
        else {
            sendData(dataToAdd);
        }
        e.target.reset()
    }
    const submitChecksOnPlaylist = (e)=>{
        e.preventDefault()
        if (!Object.keys(dataToAddToPlaylist).length) {
            return({status: 'error', message: 'You Have Not Entered Data'})
            
        }
        else {
            sendDataToPlaylist(dataToAddToPlaylist);
        }
        e.target.reset()
    }

    return (
        <div className="add">
            <h2>Add A Playlist</h2>
            <form 
            id = 'form'
            autoComplete = 'off'
            onSubmit = {submitChecks}>
                <input type='reset' htmlFor='form' value='Reset'/> <br/>
                <label htmlFor='Name'>Playlist Name*:   
                    <input required name='Name' placeholder='Playlist Name' onChange={inputChange}/> <br />
                </label>
                <label htmlFor='Cover_img'>Image: 
                    <input name='Cover_img' placeholder='Image URL' onChange={inputChange} /><br />
                </label>
                <label htmlFor='createdAt'>Created At*: 
                    <input required name='createdAt' type='date' onChange={inputChange} /> 
                </label><br />

                <input id='checkBtn' type='button' value='Check Data' onClick={()=>{console.log(dataToAdd)}}  />
                <input type='submit' value='Send Data' />
            </form>
            <br />
            <h2>Add To Playlist</h2>
            <h4>You Can Do It Simply From Song Page</h4>
            <form
            id = 'form'
            autoComplete = 'off'
            onSubmit = {submitChecksOnPlaylist}>
                <input type='reset' htmlFor='form' value='Reset'/> <br/>
                <label htmlFor='PlaylistId'>Playlist ID*:   
                    <input required type='number' name='PlaylistId' placeholder='Check the Playlist ID on Playlist Page' onChange={inputChangeToPlaylist}/> <br />
                </label>
                <label htmlFor='SongId'>Song ID*: 
                    <input required type='number' name='SongId' placeholder='Check the Playlist ID on Song Page' onChange={inputChangeToPlaylist} /><br />
                </label>

                <input id='checkBtn' type='button' value='Check Data' onClick={()=>{console.log(dataToAddToPlaylist)}}  />
                <input type='submit' value='Send Data' />
            </form>
        </div>
  )
}
export default AddPlaylist;