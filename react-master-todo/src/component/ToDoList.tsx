import {Container, TodoListHeader} from "./Layout";
import {Helmet} from "react-helmet-async";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import CreateToDo from "./CreateToDo";
import {
    Categories,
    categoryListState,
    categoryState,
    ICategory,
    IForm,
    toDoSelector,
    toDoState
} from "../interface/todoInterface";
import ToDo from "./ToDo";
import {useForm} from "react-hook-form";

function ToDoList(){
    const setToDos = useSetRecoilState(toDoState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const {register, setValue, handleSubmit} = useForm<ICategory>();
    const [categoryList, setCategoryList] = useRecoilState(categoryListState);

    const onClick = () => setToDos([]);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    const onValid = ({category}: ICategory) => {
        const newCategory = {id: Date.now(), category : category};
        setCategoryList(allCategory => {
            return [ ...allCategory, newCategory ];
        });
        setValue("category", "");
    }
    return (
        <>
            <Helmet>
                <title>TodoList</title>
            </Helmet>
            <Container>
                <TodoListHeader>
                    <h1>To Dos</h1>
                    <form onSubmit={handleSubmit(onValid)}>
                        <input
                            {...register("category", { required: true })}
                            type="text"
                            placeholder={"Add Category"}
                        />
                    </form>
                    <button onClick={onClick}>clear</button>
                </TodoListHeader>
                <form>
                    <select value={category} onInput={onInput}>
                        {categoryList?.map(item =>
                            <option key={item.category} value={item.category}>{item.category}</option>
                        )}
                    </select>
                </form>
                <CreateToDo/>
                {toDos?.map(aToDo => <ToDo key={aToDo.id} {...aToDo}/>)}
            </Container>
        </>
    )
}

export default ToDoList;