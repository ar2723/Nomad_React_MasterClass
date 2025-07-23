import {useState} from "react";

const ToDoList = () => {
    const [todo, setTodos] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: { value }} = event;
        setTodos(value)
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={todo} placeholder={"Write a to do"}/>
                <button>Add</button>
            </form>
        </>
    )
}

export default ToDoList;