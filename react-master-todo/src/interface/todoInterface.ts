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

export interface IToDo {
    text: string;
    category: "TO_DO"|"DOING"|"DONE";
    id: number;
}