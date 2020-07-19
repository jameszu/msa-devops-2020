import React, {useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import './SearchBox.css';

import { IUserInput} from '../../Common/Interfaces'

interface ISearchBoxProps
{
    SetUserInput: (a: IUserInput) => void;
}

function SearchBox(props: ISearchBoxProps)
{
    const [InputQuery, setInputQuery] = useState<string | null>("");
    const handleInputQueryChange = (s: string | null) =>
    {
        setInputQuery(s);
    }
    const [HasFocus, setHasFocus] = useState<boolean>(false);
    
    const handleSubmit = () =>
    {
        if (InputQuery?.length !== 0 && InputQuery !== null && InputQuery !== "")
        {
            let UserInput: IUserInput = 
            {
                InputQuery: InputQuery
            }
            props.SetUserInput(UserInput);
        } else{
            setHasFocus(false);
        }
    }

    return <div
    className="SearchBoxContainer">
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <TextField
                    id="outlined-full-width"
                    label="What would you like ot search"
                    variant="outlined"
                    fullWidth
                    onClick={() => setHasFocus(true)}
                    value={InputQuery}
                    size="small"
                    onChange={e => handleInputQueryChange(e.target.value)}
                    />
            </Grid>
            <Grid item xs={12}>
                <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}>
                    Search
                </Button>
            </Grid>
        </Grid>
    </div>
}
export default SearchBox