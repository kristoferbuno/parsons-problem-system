import { Avatar, ButtonGroup, Card, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from './logo.svg';
import { ArrowDownward, ArrowUpward, Fingerprint, Send } from '@mui/icons-material';
import { useLoaderData, useParams } from 'react-router-dom';
import Problem from './Problem';
import moment from 'moment';


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

function getMorphedList(order: number[], list: string[]) {
    let morphed_list = []
    for (let index in order) {
        morphed_list.push(list[order[index]])
    }
    return morphed_list
}

function SubmitSolution(id: string, data: string[]) {
    let payload = {
        "id": id,
        "solution": data
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({body: payload})
    };
    fetch('https://reqres.in/api/articles', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function SolveProblemView() {

    console.log(API_URL)
    let rawData: any = useLoaderData();
    let problem = new Problem(rawData.id, rawData.title, rawData.description, rawData.problem, rawData.submitter, moment(rawData.datetime))
    let lines = problem.problem
    console.log(lines)

    let keys: number[] = Array.from(lines.keys())

    const [order, setOrder] = useState(keys);
    const [UFID, setUFID] = useState("");

    function moveItemUp(key: number) {
        let order_copy = order.slice()
        let original_idx = order.indexOf(key)
        order_copy[original_idx] = order[original_idx-1]
        order_copy[original_idx-1] = order[original_idx]
        setOrder(order_copy)
    }

    function moveItemDown(key: number) {
        let order_copy = order.slice()
        let original_idx = order.indexOf(key)
        order_copy[original_idx] = order[original_idx+1]
        order_copy[original_idx+1] = order[original_idx]
        setOrder(order_copy)
    }

    function makeItemsFromStrings(list: string[]) {
        let items = []
        for (let i = 0; i < lines.length; i++) {
            items.push(
                <ListItem
                    key={order[i]}
                    secondaryAction={
                        <ButtonGroup>
                            {i > 0 ?
                            <IconButton edge="end" aria-label="delete" onClick={() => moveItemUp(order[i])}>
                                <ArrowUpward />
                            </IconButton> : <div></div>
                            }
                            {i < lines.length-1 ?
                            <IconButton edge="end" aria-label="delete" onClick={() => moveItemDown(order[i])}>
                                <ArrowDownward />
                            </IconButton> : <div></div>
                            }
                        </ButtonGroup>
                    }
                    >
                        <Card 
                        style={{fontFamily: "monospace", width: "90%", padding: "1rem"}}
                        >
                        <ListItemText
                        primary={list[i]}
                    />
                        </Card>

                </ListItem>
            )
        }
        return items
    }



    return <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
      Reorder the code
    </Typography>
    <Paper variant="outlined">
        <List>
            {makeItemsFromStrings(getMorphedList(order, lines))}
        </List>
    </Paper>
    <br></br>
    
    <Grid container spacing={1} minHeight={100}>   
        <Grid item xs={4.5}/>
            <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
                <TextField id="outlined-basic" label="UFID" variant="outlined" onChange={e => setUFID(e.target.value)}/> 
            </Grid>
            <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
                <IconButton color="success" onClick={() => SubmitSolution(UFID, lines)} disabled={UFID.length != 8}>
                    <Send />
                </IconButton>
            </Grid>
        <Grid item xs={4.5}/>
    </Grid>
  </Grid>
  
}

export default SolveProblemView;
