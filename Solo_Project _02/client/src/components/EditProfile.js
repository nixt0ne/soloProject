import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


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
    <div className='card p-3' >
        <h1 >Edit Your Rider Profile:</h1>
        <form  onSubmit={submitHandler} className='col mx-auto'>
        <div className='justify-content-between'>
            <div className="d-flex justify-content-between align-items-center ">
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>User Name:</h4>
                </div>
                <div>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 0, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField size="small" value = {username} id="outlined-basic" label="" variant="outlined" onChange={(e)=> setUserName(e.target.value)}/>
                    </Box>
                </div>
                
            </div>
            { errors.username ? <span className="text-danger">{errors.username.message}</span> :null}<br></br>
            <div  className='d-flex justify-content-between align-items-center'>
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>Email:</h4>
                </div>
                <div>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 0, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField size="small" value = {email} id="outlined-basic" label="" variant="outlined" onChange={(e)=> setEmail(e.target.value)}  />
                    </Box>
                </div>
            </div>
            { errors.email ? <span className="text-danger">{errors.email.message}</span> :null}<br></br>
            <div className='d-flex justify-content-between align-items align-items-center'>
                <div className='m-3'>
                    <h4 style={{color: "black", fontSize: "15px"}}>Password:</h4>
                </div>
                <div className=''>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mb: 0, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField  size="small" id="outlined-password-input" type="password" label="Password" variant="outlined" onChange={(e)=> setPassword(e.target.value)}/>
                    </Box>
                </div>
            </div>
            { errors.password ? <span className="text-danger">{errors.password.message}</span> :null}<br></br>
            <div>
                <Button type="submit" className = "mt-3" variant="contained" color="primary" endIcon={<TrendingUpIcon />}>
                    Change It Up!
                </Button>
            </div>
        </div>
            {/* <div className='d-flex justify-content-between'>
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
            </div> */}
        </form>
    </div>
  )
}

export default EditProfile