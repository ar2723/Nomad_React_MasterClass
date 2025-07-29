import {Droppable} from "react-beautiful-dnd";
import DraggabbleCard from "./DraggabbleCard";
import {BoardWrapper, Title} from "./layout";

interface IBoardProps {
    toDos: string[],
    boardId: string,
}

function Board({toDos, boardId} : IBoardProps) {
    return (
        <BoardWrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(provided) =>
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {toDos.map((todo, index) =>
                            <DraggabbleCard key={todo} todo={todo} index={index}/>
                        )}
                        {provided.placeholder}
                    </div>
                }
            </Droppable>
        </BoardWrapper>
    )
}

export default Board;