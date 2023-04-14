import { Accordion, AccordionDetails, AccordionSummary, Avatar, ButtonGroup, Card, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import logo from './logo.svg';
import { ArrowDownward, ArrowUpward, Margin, ExpandMore } from '@mui/icons-material';
import Solution from './Solution';
import moment from 'moment';


const API_URL = process.env.REACT_APP_API_URI

function DisplaySolutions(solutions: Solution[]) {
    let elements = [];
    for (let index in solutions) {
      let accordion = <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid
        container
        direction="row"
        >
          <Typography  sx={{ width: '33%', flexShrink: 0 }}>{solutions[index].UFID}</Typography>
          <Typography  sx={{ color: 'text.secondary', flexShrink: 0, justifyContent: "flex-end" }} justifyContent={"flex-end"}>{solutions[index].datetime.fromNow()}</Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        {solutions[index].SolutionCard()}
      </AccordionDetails>
    </Accordion>
      elements.push(accordion)
    }
    return <div style={{margin: "1em"}}>
      {elements}
    </div>
}

function SolutionListView() {

    const [solutions, setSolutions] = useState<Solution[]>([]);

    const fetchSolutionList = () => {
        fetch(API_URL+"solutionlist")
          .then(response => {
            console.log(API_URL)
            console.log(response)
            return response.json()
          })
          .then(data => {
            let solutions: Solution[] = [];
            for (let key in data) {
              let entry = data[key];
              let sol = new Solution(key, entry.problem_uid, entry.UFID, entry.solution, moment(entry.datetime))
              //if (sol.hasTitle())
              solutions.push(sol)
              console.log(solutions)
            }
            setSolutions(solutions)
          })
      }

    useEffect(() => {
      fetchSolutionList();
    }, []);

    return DisplaySolutions(solutions)
}

export default SolutionListView;
