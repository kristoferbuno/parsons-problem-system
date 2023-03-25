import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import DraggableList from './DraggableList';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

/* 
TODO: get query params from URL and assign to some variable of type string[]

resources:
https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
ctrl-f for "getAll" to get all query params from the URL
*/


  let dummyStringList: string[] = ['A', 'B'];

  return (
    <div className="App">
          <DraggableList>
          </DraggableList>
    </div>
  );
}

export default App;
