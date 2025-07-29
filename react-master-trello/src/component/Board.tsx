import {Droppable} from "react-beautiful-dnd";
import DraggabbleCard from "./DraggabbleCard";
import {BoardWrapper, Title} from "./layout";
import styled from "styled-components";

interface IBoardProps {
    toDos: string[],
    boardId: string,
}

interface IAreaProps {
    isDraggingOver: boolean,
    isDraggingFromThis: boolean,
}

const Area = styled.div<IAreaProps>`
    background-color: ${props => 
            props.isDraggingOver 
            ? "#dfe6e9" 
            : props.isDraggingFromThis 
            ? "#b2bec3" 
            : "transparent"
    };
    flex-grow: 1;
    transition: background-color .3s ease-in-out;
    padding: 20px;
`

function Board({toDos, boardId} : IBoardProps) {
    return (
        <BoardWrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provided, snapshot) =>
                    <Area isDraggingOver={snapshot.isDraggingOver}
                          isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                          ref={provided.innerRef}
                          {...provided.droppableProps}>
                        {toDos.map((todo, index) =>
                            <DraggabbleCard key={todo} todo={todo} index={index}/>
                        )}
                        {provided.placeholder}
                    </Area>
                }
            </Droppable>
        </BoardWrapper>
    )
}

export default Board;