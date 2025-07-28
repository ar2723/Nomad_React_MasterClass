import React from 'react';
import {DragDropContext, Droppable, Draggable, DropResult} from "react-beautiful-dnd"
import {GlobalStyle} from "./theme/GlobalStyle";
import {Board, Boards, Card, Wrapper} from "./component/layout";
import {useRecoilState} from "recoil";
import {toDoState} from "./interface/toDoState";




function App() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    const onDragEnd = ({ draggableId, destination, source }:DropResult) => {
        if(!destination) return;
        setToDos(oldToDos => {
            const copyToDos = [...oldToDos];
            // 1) Delete item on source.index
            copyToDos.splice(source.index, 1);
            // 2) Put back the item on the destination.index
            copyToDos.splice(destination?.index, 0, draggableId);
            return copyToDos;
        })
    }
    return (
        <>
            <GlobalStyle />
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Boards>
                        <Droppable droppableId={"one"}>
                            {(provided) =>
                                <Board ref={provided.innerRef} {...provided.droppableProps}>
                                    {toDos.map(((todo, index) => (
                                        <Draggable key={todo} draggableId={todo} index={index}>
                                            {(provided) =>
                                                <Card ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                    {todo}
                                                </Card>
                                            }
                                        </Draggable>
                                    )))}
                                    {provided.placeholder}
                                </Board>
                            }
                        </Droppable>
                    </Boards>
                </Wrapper>
            </DragDropContext>
        </>
    );
}

export default App;
