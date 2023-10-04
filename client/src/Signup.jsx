import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Signup(){
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result =>{console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    } 

    return(
        <div className="d-flex justify-content-center align-items-center bg-black vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input 
                        type="text" 
                        name="name" 
                        autoComplete="off"
                        placeholder="Enter Name"
                        className="form-control rounded-0" 
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
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
                        Register
                    </button>
                    </form>
                    <p className="mt-2">Already have an Account?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-black text-white rounded w-25 text-decoration-none">
                        Login
                    </Link>
                
            </div>
        </div>
    );
}

export default Signup;