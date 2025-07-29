import {Card} from "./layout";
import {Draggable} from "react-beautiful-dnd";
import React from "react";
import {IDraggableCardProps} from "../interface/toDoInterface";
import {useSetRecoilState} from "recoil";
import {toDoState} from "../atoms/toDoState";

function DraggableCard({todoId, index, todoText, boardId}: IDraggableCardProps) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = () => {
        if(!window.confirm("Do you want to delete this task?")) return;
        setToDos(allBoards => {
            const copyBoard = [...allBoards[boardId]];
            copyBoard.splice(index, 1);
            return {...allBoards, [boardId]: copyBoard};
        })
    }
    return (
        // 여기서 key와 draggableId를 반드시 일치시켜줘야 함 - 왜인지는 모르겠으나 다르면 버그가 발생
        <Draggable key={todoId} draggableId={todoId+""} index={index}>
            {(provided, snapshot) =>
                <Card
                    $isDragging={snapshot.isDragging}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    {todoText}
                    <button onClick={onClick}>X</button>
                </Card>
            }
        </Draggable>
    );
}
// prop이 바뀌는 요소에 대해서만 다시 렌더링 되도록 지정 - 최적화 목적
export default React.memo(DraggableCard);