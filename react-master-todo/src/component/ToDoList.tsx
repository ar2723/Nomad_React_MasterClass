import {useForm} from "react-hook-form";
import {ITodo} from "../interface/todoInterface";

function ToDoList(){
    const { register, handleSubmit, setValue } = useForm<ITodo>()
    const handleValid = (data:ITodo) => {
        console.log('add to do', data.todo);
        setValue("todo", "")
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(handleValid)}>
                    <input {...register("todo")} placeholder={"Write a to do"}/>
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default ToDoList;