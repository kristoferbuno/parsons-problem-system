import React from 'react';
import logo from './logo.svg';
import './App.css';
import DraggableList from './DraggableList';

let dummyStringList: string[] = ['A', 'B'];

function App() {

/* 
TODO: get query params from URL and assign to some variable of type string[]

resources:
https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
ctrl-f for "getAll" to get all query params from the URL
*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DraggableList entries={dummyStringList}/>
      </header>
    </div>
  );
}

export default App;
