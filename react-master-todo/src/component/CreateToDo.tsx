import {useForm} from "react-hook-form";
import {categoryState, IForm} from "../interface/todoInterface";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {toDoState} from "../interface/todoInterface";

function CreateToDo() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const category = useRecoilValue(categoryState);
    const setToDos = useSetRecoilState(toDoState)

    const handleValid = ({ todo }:IForm) => {
        setToDos(oldToDos => [{text:todo, category: category, id: Date.now()}, ...oldToDos])
        setValue("todo", "")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("todo", {
                    required: "Please write a To Do"
                })} placeholder={"Write a to do"}/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateToDo;