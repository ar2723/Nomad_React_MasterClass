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

export interface ITodo {
    todo: string;
    completed: boolean;
    id: number;
}