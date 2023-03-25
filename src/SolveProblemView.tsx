import { Avatar, ButtonGroup, Card, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
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

type DraggableListProps = {
    entries: string[]
}

function getMorphedList(order: number[], list: string[]) {
    let morphed_list = []
    for (let index in order) {
        morphed_list.push(list[order[index]])
    }
    return morphed_list
}


function SolveProblemView(props: DraggableListProps) {

    let keys: number[] = []
    for (let i = 0; i < props.entries.length; i++) {
        keys.push(i)
    }
    console.log(keys)

    const [order, setOrder] = useState(keys);

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
        for (let i = 0; i < props.entries.length; i++) {
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
                            {i < props.entries.length-1 ?
                            <IconButton edge="end" aria-label="delete" onClick={() => moveItemDown(order[i])}>
                                <ArrowDownward />
                            </IconButton> : <div></div>
                            }
                        </ButtonGroup>
                    }
                    >
                        <Card>
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
      Avatar with text and icon
    </Typography>
    <Paper elevation={4}>
        <List>
            {makeItemsFromStrings(getMorphedList(order, props.entries))}
        </List>
    </Paper>

  </Grid>
}

export default SolveProblemView;
