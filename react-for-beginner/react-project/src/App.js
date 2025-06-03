import {useEffect, useState} from "react";

const App = () => {
    const [toDo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (e) => setTodo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo  === "") {
            return;
        }
        setTodos(currentArray => [toDo, ...currentArray]);
        setTodo("");
    }
    useEffect(() => console.log(todos), [todos]);
    return (
        <div>
            <hr/>
            <h1>My To Dos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type={"text"}
                    placeholder={"Write your todo..."}
                />
                <button>Add To Do</button>
            </form>
            <ul>
                {todos.map((toDo, index) => (
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;