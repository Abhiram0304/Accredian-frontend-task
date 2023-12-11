import toast from "react-hot-toast";
import { endpoints } from "../APIs";
import { APIconnector } from "../APIconnector";
import {setToken} from '../../reducer/slices/authSlice'

const {SIGNUP_API,LOGIN_API} = endpoints;

export function signup(data,navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Please Wait...");
        try{
            const response = await APIconnector("POST",SIGNUP_API,data);

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("Successfully Account Created!");
            navigate("/login");
        }catch(e){
            toast.error("Signup Unsuccessful");
            navigate('/signup');
        }
        toast.dismiss(toastId);
    }
}

export function login(data,navigate){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try{

            const response = await APIconnector("POST",LOGIN_API,data);
            console.log(response);

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("SuccessFully LoggedIn");
            
            dispatch(setToken(response.data.token));
            localStorage.setItem("token", JSON.stringify(response.data.token));

            navigate("/dashboard");
        }catch(e){
            toast.error("login Unsuccessful");
            console.log(e);
            navigate("/");
        }
        toast.dismiss(toastId);
    }
}

export function logout(navigate){
    return async (dispatch) => {
        dispatch(setToken(null));
        localStorage.removeItem("token");
        toast.success("Logged Out");
        navigate("/");
    }
}