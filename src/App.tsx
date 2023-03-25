import React, { useCallback } from 'react';
import './App.css';
import DraggableList from './DraggableList';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MenuIcon, { Snowboarding } from '@mui/icons-material/';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

function App() {

/* 
TODO: get query params from URL and assign to some variable of type string[]

resources:
https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
ctrl-f for "getAll" to get all query params from the URL
*/


  let dummyStringList: string[] = ['A', 'B', 'C', 'D', 'E'];

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
          <Link to="problem">Demo Problem</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "problem",
      element: <DraggableList entries={dummyStringList}/>
    }
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
            sx={{ mr: 2 }}
            href="/"
          >
            <Snowboarding />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Parson problem
          </Typography>
        </Toolbar>
      </AppBar>
          <RouterProvider router={router}/>
    </div>
  );

}

export default App;
