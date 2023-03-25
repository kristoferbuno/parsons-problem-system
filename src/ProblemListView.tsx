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


function ProblemListView() {
    // TODO: pull list of solutions from GET /problems/ API route
    //          display metadata about problem including
    //              name
    //              description

    // also could do:
    //          sort problems by
    //              alphabetical
    //              submitter
    //              datetime created
    return <div/>
}

export default ProblemListView;
