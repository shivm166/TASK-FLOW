import React, { useState } from 'react'
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [formdata, setformdata] = useState({
        email: '',
        password:''
    })
    const Navigate = useNavigate()
    const handlelogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:4000/api/users/loginUser", formdata)
            console.log(response);
            console.log(response.data.user);
            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user))
                Navigate("/home")
            }
            else {
                alert("user not found...")
            }
        } catch (error) {
             alert(error.response.data.message)
            console.log(error.response.data.message);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={(e)=>setformdata({...formdata,email:e.target.value})} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(e)=>setformdata({...formdata,password:e.target.value})} />
                </div>
                <button type="button" onClick={(e)=>handlelogin(e)}>Login</button>
            </form>
        </div>  
    )
}

export default Login
