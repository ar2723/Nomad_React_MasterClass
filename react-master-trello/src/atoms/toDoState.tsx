import {atom, AtomEffect} from "recoil";
import {IToDoState} from "../interface/toDoInterface";

const localStorageEffect: AtomEffect<IToDoState> = ({ setSelf, onSet }) => {
    const toDos = localStorage.getItem("toDo");
    if (toDos) setSelf(JSON.parse(toDos));
    onSet((toDos: IToDoState) => localStorage.setItem("toDo", JSON.stringify(toDos)));
}

export const toDoState = atom<IToDoState>({
    key: 'toDo',
    default: {},
    effects: [localStorageEffect]
})

export const boardState = atom<string[]>({
    key: 'board',
    default: [],
})