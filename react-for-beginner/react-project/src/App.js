import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter(prev => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log("i run all the time");

    useEffect(() => console.log("i run only once"), []);
    useEffect(() => console.log("i run when 'keyword' changes."), [keyword]);
    useEffect(() => console.log("i run when 'counter' changes."), [counter]);
    useEffect(() => console.log("i run when counter & keyword changes."), [counter, keyword]);

    return (
        <div className="App">
            <input type="text" placeholder="Search here..." onChange={onChange} />
            <h2>{counter}</h2>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
