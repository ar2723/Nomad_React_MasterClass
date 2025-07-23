import {useForm} from "react-hook-form";
import {IFormData} from "../interface/todoInterface";
import {Helmet} from "react-helmet-async";

function SignupForm() {

    const { register, watch, handleSubmit, formState: { errors }, setError } = useForm<IFormData>({
        defaultValues: { email: "@naver.com" }
    });

    const onValid = (data:IFormData) => {
        if(data.password !== data.CheckingPassword) {
            setError("password",
                { message: "Password is not match" },
                { shouldFocus: true }
            )
        }
        // setError("extraError", {message: "server is down"})
    };
    console.log(errors)
    return (
        <>
            <Helmet><title>SignUp</title></Helmet>
            <form style={{ display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message: "Only Naver.com emails is allowed"
                    }
                })} placeholder={"email"}/>

                <span>{errors?.email?.message}</span>

                <input {...register("firstName", {
                    required: "firstName is required",
                    validate: {
                        noNico: (value) =>
                            value.includes("nico") ? "no nicos allowed" : true,
                        noNick: (value) =>
                            value.includes("nick") ? "no nick allowed" : true,
                    }
                })} placeholder={"firstName"}/>

                <span>{errors?.firstName?.message}</span>

                <input {...register("lastName", { required: "lastName is required" })} placeholder={"lastName"}/>

                <span>{errors?.lastName?.message}</span>

                <input {...register("username", {
                    required: "username is required",
                    minLength: {
                        value: 10,
                        message: "username must be at least 10 characters long"
                    }}
                )} placeholder={"username"}/>

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
                    required: "CheckingPassword is required",
                    minLength: 5
                })} placeholder={"CheckingPassword"}/>

                <span>{errors?.CheckingPassword?.message}</span>

                <button>Add</button>

                <span>{errors?.extraError?.message}</span>
            </form>
        </>
    )
}

export default SignupForm;