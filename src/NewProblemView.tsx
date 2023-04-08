import { Avatar, ButtonGroup, Card, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from './logo.svg';
import { ArrowDownward, ArrowUpward, Send } from '@mui/icons-material';


/*
DraggableList
entries: type String[], a list of strings that will be displayed as draggable elements in this component

return:
    a component that contains a list of strings that can be dragged around and rearranged


resources:
https://react-dnd.github.io/react-dnd/examples/sortable/simple
https://github.com/react-dnd/react-dnd/tree/main/packages/examples/src/04-sortable/simple

*/


const API_URL = process.env.REACT_APP_API_URI

function SubmitProblem(title: string, data: string[], email: string, description: string) {
    let payload = {
        "submitter": email,
        "title": title,
        "problem": data,
        "description": description
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': API_URL? API_URL : "*"},
        body: JSON.stringify({body: payload})
    };
    fetch(API_URL+'problem', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function NewProblemView() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [code, setCode] = useState("")
    const [email, setEmail] = useState("")


    return <Grid container xs={12} spacing={1}>
        <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
        <TextField
            id="outlined-multiline-static"
            label="Title"
            defaultValue=""
            onChange={e => setTitle(e.target.value)}>
        </TextField>
        </Grid>
        <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
        <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={6}
            defaultValue=""
            onChange={e => setDescription(e.target.value)}>
        </TextField>
        </Grid>
        <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
        <TextField
            id="outlined-multiline-static"
            label="Code"
            multiline
            rows={6}
            defaultValue=""
            onChange={e => setCode(e.target.value)}>
        </TextField>
        </Grid>
        <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
        <TextField
            id="outlined-multiline-static"
            label="Submitter email"
            defaultValue=""
            onChange={e => setEmail(e.target.value)}>
        </TextField>
        </Grid>
        <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
        <IconButton disabled={title.length == 0 || email.length == 0 || code.length == 0} color="success" onClick={() => SubmitProblem(title, code.split("\n"), email, description)}>
            <Send />
        </IconButton>
        </Grid>
    </Grid>

    // TODO: have the textfield submit the value to the API route POST /parsons/
    //      ideally done with "submit" button

    // add fields for name, description of problem
    // also fields to identify creator
}

export default NewProblemView;
