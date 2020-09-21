import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    textField: {
        textAlign: "center",
        marginTop: "-28px",
        "& > div > input": {
            color: "white",
        },
        "&:focus": {
            marginTop: "10px",
        }
    }
}));

function SearchBar() {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState(null);
    const [option, setOption] = useState([]);
    const history = useHistory();

    function clickHandler(e) {
        debugger;
        if (e.keyCode === 13) {
            if (e.currentTarget.innerText !== "SEARCH") {
                history.push(`/search?params=${e.currentTarget.innerText}`);
            } else {
                history.push(`/search?params=${inputValue}`);
            } 
        } else {
                console.log(e.currentTarget.innerText)
                history.push(`/search?params=${e.currentTarget.innerText}`);
            }
        }

    async function loadOption(word) {
        debugger;
        setInputValue(word);
        if (word) {
            try {
                const { data } = await axios.get(`/search?params=${word}`);
                setOption(data);
            } catch(e) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e.massage}`
                });
            }
        } else {
            setOption([]);
        }
    } 

    return (
        <div style={{width: 100}}>
            <Autocomplete
                onChange={(e) => clickHandler(e)}
                freeSolo
                id="freeSolo"
                disableClearable
                option={option.map((obj) => obj.Name)}
                renderInput={(params) => (
                    <>
                        <TextField 
                            value={inputValue}
                            className={classes.textField}
                            color="secondary"
                            onChange={(e) => loadOption(e.target.value)}
                            {...params}
                            label={<SearchIcon />}
                            inputProps={{
                                ...params.inputProps,
                                type: "search",
                            }}
                        />
                    </>
                )}
            />
        </div> 
    );
}

export default SearchBar
