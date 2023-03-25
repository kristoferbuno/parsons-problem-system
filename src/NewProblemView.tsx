import { Avatar, ButtonGroup, Card, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from './logo.svg';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';


/*
DraggableList
entries: type String[], a list of strings that will be displayed as draggable elements in this component

return:
    a component that contains a list of strings that can be dragged around and rearranged


resources:
https://react-dnd.github.io/react-dnd/examples/sortable/simple
https://github.com/react-dnd/react-dnd/tree/main/packages/examples/src/04-sortable/simple

*/


function NewProblemView() {
    return <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value">
        </TextField>
    // TODO: have the textfield submit the value to the API route POST /parsons/
    //      ideally done with "submit" button

    // add fields for name, description of problem
    // also fields to identify creator
    return <div/>
}

export default NewProblemView;
