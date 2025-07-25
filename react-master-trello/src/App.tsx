import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

function App() {
    const onDragEnd = () => {

    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={"one"}>
                {(provided, snapshot) =>
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        <Draggable draggableId={"first"} index={0}>
                            {(provided) =>
                                <li ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}>One
                                </li>
                            }
                        </Draggable>
                        <Draggable draggableId={"second"} index={1}>
                            {(provided) =>
                                <li ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}>Two
                                </li>
                            }
                        </Draggable>
                    </ul>
                }
            </Droppable>
        </DragDropContext>
    );
}

export default App;
