import {Card} from "./layout";
import {Draggable} from "react-beautiful-dnd";
import React from "react";

interface IDraggableCardProps {
    todo: string,
    index: number,
}

function DraggableCard({todo, index}: IDraggableCardProps) {
    console.log("this component is rendered");
    return (
        // 여기서 key와 draggableId를 반드시 일치시켜줘야 함 - 왜인지는 모르겠으나 다르면 버그가 발생
        <Draggable key={todo} draggableId={todo} index={index}>
            {(provided) =>
                <Card ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    {todo}
                </Card>
            }
        </Draggable>
    );
}
// prop이 바뀌는 요소에 대해서만 다시 렌더링 되도록 지정 - 최적화 목적
export default React.memo(DraggableCard);