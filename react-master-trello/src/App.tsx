import React from 'react';
import {DragDropContext, DropResult} from "react-beautiful-dnd"
import {GlobalStyle} from "./theme/GlobalStyle";
import {Boards, Wrapper} from "./component/layout";
import {useRecoilState} from "recoil";
import {toDoState} from "./atoms/toDoState";
import Board from "./component/Board";
import Trashcan from "./component/Trashcan";
import {controllCardMovement} from "./utils/boardFn";

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    const onDragEnd = (info:DropResult) => {
        controllCardMovement(info, setToDos);
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
                    <Trashcan/>
                </Wrapper>
            </DragDropContext>
        </>
    );
}

export default App;
