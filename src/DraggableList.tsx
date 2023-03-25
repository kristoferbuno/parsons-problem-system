import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Paper } from '@mui/material';



class List extends React.Component <any, any>{
  render() {
    const { provided, innerRef, children } = this.props;
    return (
      <div {...provided.droppableProps} ref={innerRef}>
        {children}
      </div>
    );
  }
}

class Person extends React.Component <any, any>{
  render() {
    const { provided, innerRef } = this.props;
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={innerRef}
      >
        'I am a person, I think..'
      </div>
    );
  }
}

function ReturnDraggableElements(list: string[]) {
    let elements = []
    for (let string in list) {
        elements.push(
        <Draggable draggableId="element" index={0}>
        {
            provided => (
          <Person provided={provided} innerRef={provided.innerRef} />
        )}
        </Draggable>)
    }
    return elements;
}


class DraggableList extends React.Component<any, any> {
  render() {
    return (
      <DragDropContext onDragEnd={() => {}}>
        <h3>My person</h3>
        <Droppable droppableId="droppable">
          {provided => (
            <Paper ref={provided.innerRef}>
               {ReturnDraggableElements(this.props.lines)}
              {provided.placeholder}
            </Paper>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DraggableList;
