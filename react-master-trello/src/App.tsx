import React from 'react';
import {DragDropContext, DropResult} from "react-beautiful-dnd"
import {GlobalStyle} from "./theme/GlobalStyle";
import {Boards, Wrapper} from "./component/layout";
import {RecoilLoadable, useRecoilState} from "recoil";
import {toDoState} from "./interface/toDoState";
import Board from "./component/Board";
import all = RecoilLoadable.all;

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    const onDragEnd = (info:DropResult) => {
        console.log(info);
        const {destination, draggableId, source} = info;
        if(!destination) return;
        // same board movement.
        if(destination.droppableId === source.droppableId) {
            setToDos((allBoards) => {
                const boardCopy = [...allBoards[source.droppableId]];
                // 1) Delete item on source.index
                boardCopy.splice(source.index, 1);
                // 2) Put back the item on the destination.index
                boardCopy.splice(destination.index, 0, draggableId);
                return {
                    ...allBoards,
                    [source.droppableId]: boardCopy
                };
            })
        }
        // CrossBoard movement.
        else if(destination.droppableId !== source.droppableId) {
            setToDos(allBoards => {
                const sourceBoard = [...allBoards[source.droppableId]];
                const targetBoard = [...allBoards[destination.droppableId]];

                sourceBoard.splice(source.index, 1);
                targetBoard.splice(destination.index, 0, draggableId);

                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: targetBoard
                }
            })
        }
    }
    return (
        // 일반적으로 부모의 Component가 변경되면 자식 Component가 모두 재렌더링되어버린다.
        <>
            <GlobalStyle/>
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Boards>
                        {Object.keys(toDos).map(boardId => (
                            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]}/>
                        ))}
                    </Boards>
                </Wrapper>
            </DragDropContext>
        </>
    );
}

export default App;
