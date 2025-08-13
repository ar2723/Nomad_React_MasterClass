import {categoryListState, IToDo, toDoState} from "../interface/todoInterface";
import {useRecoilValue, useSetRecoilState} from "recoil";


const ToDo = (props:IToDo) => {
    const setToDos = useSetRecoilState(toDoState);
    const categoryList = useRecoilValue(categoryListState);
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
            {categoryList?.map(category => {
                if(category.category !== props.category) {
                    return <button key={category.id} name={category.category} onClick={onClick}>{category.label}</button>
                }}
            )}
        </li>
    );
}

export default ToDo