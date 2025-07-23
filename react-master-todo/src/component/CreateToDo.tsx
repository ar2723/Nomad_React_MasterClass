import {useForm} from "react-hook-form";
import {IForm} from "../interface/todoInterface";
import {useSetRecoilState} from "recoil";
import {toDoState} from "../atoms/todoAtoms";

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState)
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ todo }:IForm) => {
        setToDos(oldToDos => [{text:todo, category: "TO_DO", id: Date.now()}, ...oldToDos])
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