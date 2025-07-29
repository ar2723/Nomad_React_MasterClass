export interface ITodo {
    id:number;
    text: string;
}

export interface IToDoState {
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
    boardId: string,
}

export interface IForm {
    todo: string;
}