import {atom} from "recoil";
import {IToDoState} from "../interface/toDoInterface";

export const toDoState = atom<IToDoState>({
    key: 'toDo',
    default: {
        "To Do": [],
        doing: [],
        done: []
    },
})