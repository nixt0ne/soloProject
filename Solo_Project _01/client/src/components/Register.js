import React, {useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import NavBar from './NavBar'

const Register = () => {

const navigate = useNavigate()
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [profile, setProfile] = useState('https://static.thenounproject.com/png/3465604-200.png')
const [backImg, setBackImg] = useState('https://media.istockphoto.com/vectors/add-photo-icon-on-white-background-vector-illustration-vector-id1399022923?k=20&m=1399022923&s=612x612&w=0&h=9U57jWOtRMgrjc2Srzw6ZGtChhT78c3Qw-3wlwuh8jE=')


const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/register', {
    username,
    email,
    password,
    confirmPassword,
    profile,
    backImg,
},{withCredentials:true})
    
    .then((res)=>{
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

        // navigate('/landingPage')

    }).catch((err)=>{
        console.log(err)
    })
}

  return (
    <div>
        <h1>Join The Rider CREW!</h1>
        <form  onSubmit={submitHandler} className='col mx-auto mt-3'>
            <div className='d-flex justify-content-between'>
                <div className=' mb-4'>
                    <label>Username:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setUsername(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Email:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Password:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Confirm Password:</label>
                </div>
                <div>
                    <input type="text" className="form-control" onChange={(e)=> setConfirmPassword(e.target.value)}></input>
                </div>
            </div>
            <button className='btn btn-info mt-3 '>Become A Rider!</button>
        </form>
    </div>
  )
}

export default Register