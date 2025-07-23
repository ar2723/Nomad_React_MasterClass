import {Container} from "./Layout";
import {Helmet} from "react-helmet-async";
import {useRecoilValue} from "recoil";
import CreateToDo from "./CreateToDo";
import {toDoState} from "../atoms/todoAtoms";
import ToDo from "./ToDo";

function ToDoList(){
    const toDos = useRecoilValue(toDoState);
    return (
        <>
            <Helmet>
                <title>TodoList</title>
            </Helmet>
            <Container>
                <h1>To Dos</h1> <hr/>
                <CreateToDo/>
                <ul>
                    {toDos.map((todo) =>
                        <ToDo key={todo.id} {...todo} />
                    )}
                </ul>
            </Container>
        </>
    )
}

export default ToDoList;