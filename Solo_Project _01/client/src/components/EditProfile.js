import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const EditProfile = () => {

    const [username,setUserName] = useState('')
    const [email, setEmail] = useState('')
    // const [footSize, setFootSize] =useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [id, setId] = useState('')


    // const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{

            setUserName(res.data.username)
            setEmail(res.data.email)
            // setPassword(res.data.password)
            // setId(res.data._id)
            // setFootSize(res.data.footSize)


        })
        .catch((err)=>{
            console.log(err)
            // setNoId('Pets not found using that ID')
        })
    },[])

const submitHandler = (e) =>{
    e.preventDefault()
    axios.put('http://localhost:8000/api/updateUser',{
        username,
        email,
        password,

},{withCredentials:true})
    .then((res)=>{
        console.log(res)
        navigate('/homeProfile')
    })
    .catch((err)=>{
        console.log(err)
        setErrors(err.response.data.errors)
    })
}

  return (
    <div>
        <h1>Edit Your Rider Profile:</h1>
        <form  onSubmit={submitHandler} className='col mx-auto'>
            <div className='d-flex justify-content-between'>
                <div className=' mb-4'>
                    <label>Username:</label>
                </div>
                <div>
                    <input type="text" value = {username} className="form-control" onChange={(e)=> setUserName(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Email:</label>
                </div>
                <div>
                    <input type="text" value = {email} className="form-control" onChange={(e)=> setEmail(e.target.value)}></input>
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
            <div className='justify-content-end'>
                <button className='btn btn-info mt-3  '>Change It Up!</button>
            </div>
        </form>
    </div>
  )
}

export default EditProfile