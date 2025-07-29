import {DropResult} from "react-beautiful-dnd";
import {IToDoState} from "../interface/toDoInterface";
import {SetterOrUpdater} from "recoil";

export const controllCardMovement = (info:DropResult, setToDos: SetterOrUpdater<IToDoState>) => {
    const {destination, source} = info;
    if(!destination) return;

    if(destination.droppableId === "trash") {
        if(!window.confirm("Do you want to delete this task?")) return;
        setToDos(allBoards => {
            const copyBoard = [...allBoards[source.droppableId]];
            copyBoard.splice(source.index, 1);
            return {...allBoards, [source.droppableId]: copyBoard};
        })
    }
    // same board movement.
    else if(destination.droppableId === source.droppableId) {
        setToDos((allBoards) => {
            const boardCopy = [...allBoards[source.droppableId]];
            const taskObj = boardCopy[source.index];
            // 1) Delete item on source.index
            boardCopy.splice(source.index, 1);
            // 2) Put back the item on the destination.index
            boardCopy.splice(destination.index, 0, taskObj);
            return {...allBoards, [source.droppableId]: boardCopy};
        })
    }
    // CrossBoard movement.
    else if(destination.droppableId !== source.droppableId) {
        setToDos(allBoards => {
            const sourceBoard = [...allBoards[source.droppableId]];
            const taskObj = sourceBoard[source.index];
            const targetBoard = [...allBoards[destination.droppableId]];

            sourceBoard.splice(source.index, 1);
            targetBoard.splice(destination.index, 0, taskObj);

            return {
                ...allBoards,
                [source.droppableId]: sourceBoard,
                [destination.droppableId]: targetBoard
            }
        })
    }
};