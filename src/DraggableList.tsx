import React from 'react';
import logo from './logo.svg';


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

function DraggableList(props: DraggableListProps) {
    return <div></div>;
}

export default DraggableList;
