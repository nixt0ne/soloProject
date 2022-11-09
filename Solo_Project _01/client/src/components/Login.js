import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
        email,
        password,
    },{withCredentials:true})
        
        .then((res)=>{
            navigate('/homeProfile')
    
        }).catch((err)=>{
            console.log(err)
        })
    }
    
      return (
        <div>
            <h1>Welcome Back, Rider!</h1>
            <form  onSubmit={submitHandler} className='col  mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <div className='mb-4'>
                        <label className=''>Email:</label>
                    </div>
                    <div>
                        <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <label className=''>Password:</label>
                    </div>
                    <div>
                        <input type="text" className="form-control" onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>
                </div>
                <button className='btn btn-info mt-3 '>Let's Get It!</button>
            </form>
        </div>
      )
    }
export default Login