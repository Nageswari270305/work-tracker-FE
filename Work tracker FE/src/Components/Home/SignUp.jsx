import { useForm } from "react-hook-form";
import {LoginSubmitData} from "../../api.js/Login"

function Signup(){

    const{register, handleSubmit}=useForm();

   
    return(
        <>
        <form onSubmit={handleSubmit(LoginSubmitData)}>
            <label>Username</label>
            <input 
            {...register("UserName")}
            />
            <label>Password</label>
            <input 
            {...register("password")}
           />
           <button type="submit">
            Submit
           </button>
        </form>
        </>
    )
}

export default Signup;