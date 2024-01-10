import { createContext,useState,useEffect } from "react";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";

const swal = require('sweetalert2')

const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({children}) =>{
    const[authTokens, setAuthTokens] = useState(()=>
        localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );

    const[user,setUser] = useState(()=>
        localStorage.getItem("authTokens")
        ? jwt_decode(localStorage.getItem("authTokens"))
        : null
    );

    const[loading,setLoading] = useState(true);

    const navigate = useNavigate();


    const loginUser = async (email,password) =>{
        try{
            const response = await fetch("http://127.0.0.1:8000/api/account/login/",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email,
                    password,
                }),
            });
            if (response.status === 200){
                const data = await response.json();
                setAuthTokens(data);
                setUser(jwt_decode(data.access));
                localStorage.setItem("authTokens",JSON.stringify(data));
                navigate("/");
                swal.fire({
                    msg:"Login Successfull",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: "top-right",
                    timerProgressBar: true,
                    showConfirmButton: false,

                });

            } else {
                console.log(response.status);
                console.log("Invalid Credential");
                swal.fire({
                    msg:"Invalid credentials",
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    position: "top-right",
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } 
        } catch (error){
            console.error("Error during login", error);
        }
    };


    const signupUser = async (name,email,phone,password,password2)=> {
        try{
            const response = await fetch("http://127.0.0.1:8000/api/account/signup/",{
                method : "POST",
                headers : {
                    "Content-Type":"application/json"
                },
                body : JSON.stringify({
                    name,email,phone,password,password2
                }),
            });
            if(response.status === 201){
                navigate("/login")
                swal.fire({
                    msg:"Please confirm your email address to complete the registration",
                    icon:"success",
                    toast:true,
                    timer:6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
    
                    
                })
            } else {
                console.log(response.status);
                console.log("there was a server issue");
                swal.fire({
                    msg:"An Error Occured " + response.status,
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            }
        } catch(error){
            console.error("Eorror during Signup",error);
        }
        
    }


    const verifyUser = async (email_token)=>{
        try{
            const response = await fetch(`http://127.0.0.1:8000/api/account/verify/${email_token}/`,
                {
                    method:"POST",
                }
            );
            if(response.status === 200){
                swal.fire({
                    msg:"Email verification successful",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: "top-right",
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } else {
                console.log(response.status);
                swal.fire({
                    msg:"Email verification failed",
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    position: "top-right",
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } 
        } catch(error){
            console.error("Error during email verification:", error);
        }
    }



    const logoutUser = ()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        navigate("/login")
        swal.fire({
            msg:"You have been logged out...",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        signupUser,
        verifyUser,
        loginUser,
        logoutUser,
    }

    useEffect(()=>{
        if (authTokens) {
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    },[authTokens,loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading? null : children}
        </AuthContext.Provider>
    );
};
