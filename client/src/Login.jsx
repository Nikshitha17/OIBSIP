import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Login(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        // .then(result =>{
        //     console.log(result)

        //     navigate('/home')
        // })
        // .catch(err=>{
        //     console.log(err);

        //     alert('Login failed. Please check your email and password.');
        // })
        .then(result => {
            console.log(result);
            if (result.data.success) {
              // Successful login, navigate to the home page
              console.log(result)

              navigate('/home')
            } 
          })
          .catch(err => {
            console.log(err);
            // Handle the error here, e.g., show an error message to the user
          });
    } 
    return(
        <div className="d-flex justify-content-center align-items-center bg-black vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input 
                    type="email" 
                    name="email" 
                    autoComplete="off"
                    placeholder="Enter Email"
                    className="form-control rounded-0" 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input 
                    type="password" 
                    name="password" 
                    autoComplete="off"
                    placeholder="Enter Password"
                    className="form-control rounded-0" 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 bg-black rounded w-25">
                    Login
                </button>
                </form>
                <p className="mt-2">Don't have an Account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-black text-white rounded w-25 text-decoration-none">
                    Sign Up
                </Link>
            
        </div>
    </div>
    )
}

export default Login;