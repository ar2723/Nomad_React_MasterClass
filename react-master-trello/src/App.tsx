import React from 'react';
import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd"
import {GlobalStyle} from "./theme/GlobalStyle";
import {Board, Boards, Wrapper} from "./component/layout";
import {useRecoilState} from "recoil";
import {toDoState} from "./interface/toDoState";
import DraggabbleCard from "./component/DraggabbleCard";

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
        // 일반적으로 부모의 Component가 변경되면 자식 Component가 모두 재렌더링되어버린다.
        <>
            <GlobalStyle />
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Boards>
                        <Droppable droppableId={"one"}>
                            {(provided) =>
                                <Board ref={provided.innerRef} {...provided.droppableProps}>
                                    {toDos.map(
                                        ((todo, index) =>
                                            <DraggabbleCard key={todo} todo={todo} index={index}/>
                                        ))
                                    }
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
