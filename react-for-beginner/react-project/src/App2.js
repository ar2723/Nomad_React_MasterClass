import {useState, useEffect} from "react";


const Hello = () => {
    const destroyFn = () => {
        console.log('destroyed :(')
    };
    const effectFn = () => {
        console.log('Created! :)');
        // cleanup을 사용할 때, 함수를 반환하는거지 호출을 하면 안됨
        return destroyFn;
    };
    useEffect(effectFn, []);
    return <h1>Hello</h1>;
}

const App2 = () => {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing(prev => !prev);
    return (
        <div>
            <hr />
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export default App2;