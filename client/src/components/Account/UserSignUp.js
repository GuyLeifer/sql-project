import React, { useState } from 'react';
import Modal from 'react-modal'
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserSignUp({sendData, sendStatus}) {
    const [info, setInfo] = useState(null);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [err, setErr] = useState(null);

    function openModal() {
        setIsOpen(true);
      }
     
      function closeModal(){
        setIsOpen(false);
      }

    const dataToAdd = {};

    const inputChange = (e) => {
        addData(e.target)
    } 

    const addData = ({name,value}) => {
        dataToAdd[name] = value
    }

    async function sendData(data){
        try {
            const res = await axios.post('/users/signup', data);
            if (res.data.error !== undefined) {
                const error = res.data.error
                setErr(error);
                debugger
            } 
            else {
                setInfo(await res.data);
                debugger
                openModal()
            } 
        }
        catch (err) {
            console.log("err:", err)
        }
        
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

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    return (
        <div className="signUp">
            <h1>Sign - Up</h1>
            <h2>For The Streamer App</h2>
            <form 
            id = 'signUpForm'
            autoComplete = 'off'
            onSubmit = {submitChecks}>
                <div>
                    <input type='reset' htmlFor='signUpForm' value='Reset'/>
                </div>
                <div>
                    <label htmlFor='Name'>Username*:   
                        <input required name='Name' placeholder='Username' required onChange={inputChange}/> <br />
                    </label>
                </div>
                <div>
                    <label htmlFor='Email'>Email:   
                        <input type="email" required name='Email' placeholder='Email' required onChange={inputChange}/> <br />
                    </label>
                </div>
                <div>
                    <label htmlFor='Password'>Password: 
                        <input type="password" required name='Password' placeholder='Password' onChange={inputChange} /><br />
                    </label>
                </div>
                {err && (
                    <h3>{err}</h3>
                )}
                

                <input id='checkBtn' type='button' value='Check Data' onClick={()=>{console.log(dataToAdd)}}  />
                <input type='submit' value='Send Data' />
            </form>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
              >
                <h3>Your Account Is Ready</h3>
                    <div>
                        {info && (
                            <div>
                                <div>Username: {info.Name}</div>
                                <div>Email: {info.Email}</div>
                            </div>
                        )}
                        <Link to="/">
                            <button onClick={closeModal}>close</button>
                        </Link>
                    </div> 
              </Modal>
        </div>
  )
}
export default UserSignUp;
