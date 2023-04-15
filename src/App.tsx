import React, { useCallback } from 'react';
import './App.css';
import DraggableList from './SolveProblemView';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useRouteLoaderData,
} from "react-router-dom";
import MenuIcon, { Snowboarding } from '@mui/icons-material/';

import { AppBar, Button, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import NewProblemView from './NewProblemView';
import SolutionListView from './SolutionListView';
import SolveProblemView from './SolveProblemView';
import { padding } from '@mui/system';
import ProblemListView from './ProblemListView';
import ViewSpecificSolution from './ViewSpecificSolution';

function App() {

/* 
TODO: get query params from URL and assign to some variable of type string[]

resources:
https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
ctrl-f for "getAll" to get all query params from the URL
*/


  let dummyStringList: string[] = ['A', 'B', 'C', 'D', 'E'];
  const API_URL = process.env.REACT_APP_API_URI

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
          <br/>
          <Link to="solve">Demo Problem</Link>
          <br/>
          <Link to="problems">Problems</Link>
          <br/>
          <Link to="new">New Problem</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "solve/:problemid",
      loader: async ({ request, params }) => {
        return fetch(
          API_URL+`problem?problemid=`+params.problemid,
          { signal: request.signal }
        );
      },
      element: <SolveProblemView/>
    },
    {
      path: "viewsolutions/:problemid",
      loader: async ({ request, params }) => {
        return fetch(
          API_URL+`solutionlist`, // use API route for specific problem solutions (still need to add)
          { signal: request.signal }
        );
      },
      element: <SolutionListView></SolutionListView>
    },
    {
      path: "view/:solutionid",
      loader: async ({ request, params }) => {
        return fetch(
          API_URL+`solution?solutionid=`+params.solutionid,
          { signal: request.signal }
        );
      },
      element: <ViewSpecificSolution></ViewSpecificSolution>
    },
    {
      path: "new",
      element: <NewProblemView/> // making a parson's problem
    },
    {
      path: "problems",
      loader: async ({ request, params }) => {
        return fetch(
          API_URL+`problemlist`,
          { signal: request.signal }
        );
      },
      element: <ProblemListView></ProblemListView> // viewing list of submitted parsons' problems
    },
    {
      path: "submitted",
      element: <SolutionListView></SolutionListView> // viewing list of submitted parsons' problems
    },
    {
      path: "solution",
      element: <div>solution</div> // viewing a specific solution
    },
  ]);

  return (
    <div className="App">
            <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
            href="/"
          >
            <Snowboarding />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Parson's problems platform
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{padding: "1rem"}}>
      <Paper   style={{padding: "1rem"}}>
        <RouterProvider router={router}/>
      </Paper>
      </div>
    </div>
  );

}

export default App;
