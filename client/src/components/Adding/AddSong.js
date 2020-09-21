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
        await axios.post('/song/', data)
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
            <h1>Add A Song</h1>
            <form 
            id = 'form'
            autoComplete = 'off'
            onSubmit = {submitChecks}>
                <input type='reset' htmlFor='form' value='Reset'/> <br/>
                <label htmlFor='Artist_id'>Artist ID*:   
                    <input required type='number' name='Artist_id' placeholder='Check The ID on Artist Page' required onChange={inputChange}/> <br />
                </label>
                <label htmlFor='Album_id'>Album ID*:   
                    <input required type='number' name='Album_id' placeholder='Check The ID on Album Page' required onChange={inputChange}/> <br />
                </label>
                <label htmlFor='Title'>Song Title: 
                    <input name='Title' placeholder='Title' onChange={inputChange} /><br />
                </label>
                <label htmlFor='YouTube_Link'>Song Title: 
                    <input name='YouTube_Link' placeholder='YouTube ID Link' onChange={inputChange} /><br />
                </label>
                <label htmlFor='Length'>Length (HH:MM:SS)* 
                <input step='1' required name='Length' type='time' onChange={inputChange} /><br />
                </label>
                <label htmlFor='Track_Number'>Track Number: (In Album)* 
                <input required name='Track_Number' type='number' onChange={inputChange} /><br />
                </label><br />
                <label htmlFor='Created_at'>Created At*: 
                    <input required name='Created_at' type='date' onChange={inputChange} /> <br />
                </label>
                <legend>Lyrics:</legend>
                <textarea style={{width:'20vw'}} form='form' wrap='soft' rows='6' maxLength='8000' required name='Lyrics' type='textarea' onChange={inputChange} /><br />

                <input id='checkBtn' type='button' value='Check Data' onClick={()=>{console.log(dataToAdd)}}/>
                <input type='submit' value='Send Data'/>
            </form>
        </div>
  )
}
export default AddAlbum;
