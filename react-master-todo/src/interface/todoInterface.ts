import {atom, AtomEffect, selector} from "recoil";

export interface IFormData {
    errors: {
        email: {
            message: string;
        };
    };
    firstName: string;
    username: string;
    lastName: string;
    email: string;
    password: string;
    CheckingPassword: string;
    extraError?: string;
}

export interface IForm {
    todo: string;
}

export enum Categories {
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE"
}

export interface IToDo {
    text: string;
    category: Categories;
    id: number;
}

const localStorageEffect: AtomEffect<IToDo[]> = ({ setSelf, onSet }) => {
    const toDos = localStorage.getItem("toDos");
    if (toDos) setSelf(JSON.parse(toDos));
    onSet((toDos: IToDo[]) => localStorage.setItem("toDos", JSON.stringify(toDos)));
};

export const categoryState = atom<Categories>({
    key:"category",
    default:Categories.TO_DO
});

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
    effects: [localStorageEffect]
});

// toDoSelector를 통해 state의 output을 변경하는 것
export const toDoSelector = selector({
    key:"toDoSelector",
    // selector 가 어떤 값을 반환할지 결정
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter(todo => todo.category === category);
    }
});

export const minutesState = atom({
    key: 'minutes',
    default: 0,
})

export const hoursSelector = selector<number>({
    key: 'hours',
    get: ({get}) => {
        return get(minutesState) / 60;
    },
    set: ({set}, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minutesState, minutes);
    }
})