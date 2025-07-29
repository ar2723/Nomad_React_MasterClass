import {TrashBox, TrashcanArea} from "./layout";
import {Droppable} from "react-beautiful-dnd";

const Trashcan = () => {
    return (
        <>
            <TrashcanArea>
                <Droppable droppableId={"trash"}>
                    {(provided, snapshot) => (
                        <TrashBox
                            $isDraggingOver={snapshot.isDraggingOver}
                            $draggingOverWith={Boolean(snapshot.draggingOverWith)}
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <span>throw your to do hear!</span>
                            {provided.placeholder}
                        </TrashBox>
                    )}
                </Droppable>
            </TrashcanArea>
        </>
    )
}

export default Trashcan;