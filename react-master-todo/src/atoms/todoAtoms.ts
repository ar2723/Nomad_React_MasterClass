import {atom} from "recoil";
import {IToDo} from "../interface/todoInterface";

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: []
})