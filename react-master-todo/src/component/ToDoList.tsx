import {useForm} from "react-hook-form";
import {IFormData} from "../interface/todoInterface";
import {Helmet} from "react-helmet-async";

function ToDoList() {
    const { register, watch, handleSubmit, formState: { errors }} = useForm<IFormData>({
        defaultValues: {
            email: "@naver.com"
        }
    });
    const onValid = (data:IFormData) => {
        console.log(data);
    }
    return (
        <>
            <Helmet><title>TodoList</title></Helmet>
            <form style={{ display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message: "Only Naver.com emails is allowed"
                    }
                })} placeholder={"email"}/>
                <span>{errors?.email?.message}</span>

                <input {...register("firstName", { required: true })}
                       placeholder={"firstName"}/>
                <span>{errors?.firstName?.message}</span>

                <input {...register("lastName", { required: true })}
                       placeholder={"lastName"}/>
                <span>{errors?.lastName?.message}</span>

                <input {...register("username", { required: true, minLength: 10 })}
                       placeholder={"username"}/>
                <span>{errors?.username?.message}</span>

                <input {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 5,
                        message: "Password must be at least 5 characters long"
                    }}
                )} placeholder={"password"}/>
                <span>{errors?.password?.message}</span>

                <input {...register("CheckingPassword", {
                    required: "CheckingPassword is required"
                    , minLength: 5
                })} placeholder={"CheckingPassword"}/>
                <span>{errors?.CheckingPassword?.message}</span>

                <button>Add</button>
            </form>
        </>
    )
}

export default ToDoList;