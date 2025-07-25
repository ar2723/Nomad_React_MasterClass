import {Container} from "./Layout";
import {Helmet} from "react-helmet-async";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import CreateToDo from "./CreateToDo";
import {Categories, categoryState, toDoSelector, toDoState} from "../interface/todoInterface";
import ToDo from "./ToDo";

function ToDoList(){
    const setToDos = useSetRecoilState(toDoState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onClick = () => setToDos([]);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    return (
        <>
            <Helmet>
                <title>TodoList</title>
            </Helmet>
            <Container>
                <h1>To Dos</h1>
                <button onClick={onClick}>clear</button>
                <hr/>
                <form>
                    <select value={category} onInput={onInput}>
                        <option value={Categories.TO_DO}>To Do</option>
                        <option value={Categories.DOING}>Doing</option>
                        <option value={Categories.DONE}>Done</option>
                    </select>
                </form>
                <CreateToDo/>
                {toDos?.map(aToDo => <ToDo key={aToDo.id} {...aToDo}/>)}
            </Container>
        </>
    )
}

export default ToDoList;