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

export interface ICategory {
    id: number;
    category: string;
    label: string;
}

export enum Categories {
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE"
}

export interface IToDo {
    text: string;
    category: string;
    id: number;
}

const localStorageEffect: AtomEffect<IToDo[]> = ({ setSelf, onSet }) => {
    const toDos = localStorage.getItem("toDos");
    if (toDos) setSelf(JSON.parse(toDos));
    onSet((toDos: IToDo[]) => localStorage.setItem("toDos", JSON.stringify(toDos)));
};

const localStorageEffectForList: AtomEffect<ICategory[]> = ({ setSelf, onSet }) => {
    const categories = localStorage.getItem("categoryList");
    if (categories) setSelf(JSON.parse(categories));
    onSet((categories: ICategory[]) => localStorage.setItem("categoryList", JSON.stringify(categories)));
};

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default: [],
    effects: [localStorageEffect]
});

export const categoryListState = atom<ICategory[]>({
    key:"categoryList",
    default: [
        {id:1, category:Categories.TO_DO, label: "To Do"},
        {id:2, category:Categories.DOING, label: "Doing"},
        {id:3, category:Categories.DONE, label: "Done"}
    ],
    effects: [localStorageEffectForList]
})

export const categoryState = atom<Categories>({
    key:"category",
    default:Categories.TO_DO
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