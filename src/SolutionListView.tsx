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


function SolutionListView() {
    // TODO: pull list of solutions from GET /solutions/ API route
    //          display metadata about solutions including:
    //              link to original problem
    //                  name, description of original problem
    //              submitter data

    // also could do:
    //          sort solutions by
    //              problem
    //                  problem, alphabetical
    //                  problem, datetime created
    //              submitter
    //              datetime submitted
    return <div/>
}

export default SolutionListView;
