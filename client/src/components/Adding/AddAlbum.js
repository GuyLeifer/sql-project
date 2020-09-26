import React from 'react';
import axios from 'axios';

function AddAlbum({sendData, sendStatus}) {
    const dataToAdd = {};

    const inputChange = (e) => {
        addData(e.target)
    } 

    const addData = ({name,value}) => {
        dataToAdd[name] = value
    }

    async function sendData(data){
        await axios.post('/albums/', data)
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
    return (
        <div className="add">
            <h1>Add An Album</h1>
            <form 
            id = 'form'
            autoComplete = 'off'
            onSubmit = {submitChecks}>
                <input type='reset' htmlFor='form' value='Reset'/> <br/>
                <label htmlFor='ArtistId'>Artist ID*:   
                    <input required name='ArtistId' placeholder='Check The ID on Artist Page' required onChange={inputChange}/> <br />
                </label>
                <label htmlFor='Name'>Album Name:   
                    <input required name='Name' placeholder='Album Name' required onChange={inputChange}/> <br />
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
        </div>
  )
}
export default AddAlbum;