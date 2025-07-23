import {IToDo} from "../interface/todoInterface";
import {useSetRecoilState} from "recoil";
import {toDoState} from "../atoms/todoAtoms";


const ToDo = (props:IToDo) => {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(todo => todo.id === props.id);
            const newToDo = { text: props.text, category: name as any, id: props.id };
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)]
        })
    }
    return (
        <li>{props.text}
            {props.category !== "DOING" &&
                <button name="DOING" onClick={onClick}>Doing</button>}
            {props.category !== "TO_DO" &&
                <button name="TO_DO" onClick={onClick}>To Do</button>}
            {props.category !== "DONE" &&
                <button name="DONE" onClick={onClick}>Done</button>}
        </li>
    );
}

export default ToDo