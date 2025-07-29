import {atom} from "recoil";

export interface ITodo {
    id:number;
    text: string;
}

interface IToDoState {
    [key: string]: ITodo[];
}

export interface IBoardProps {
    toDos: ITodo[],
    boardId: string,
}

export interface IAreaProps {
    $isDraggingOver: boolean,
    $isDraggingFromThis: boolean,
}

export interface IDraggableCardProps {
    todoId: number,
    todoText: string,
    index: number,
}

export interface IForm {
    todo: string;
}

export const toDoState = atom<IToDoState>({
    key: 'toDo',
    default: {
        "To Do": [],
        doing: [],
        done: []
    },
})