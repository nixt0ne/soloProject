import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const EditProfile = () => {

    const [profile,setProfile] = useState('')
    const [backImg, setBackImg] = useState('')
    // const [footSize, setFootSize] =useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [id, setId] = useState('')


    // const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{

            setProfile(res.data.profile)
            setBackImg(res.data.backImg)
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
        profile,
        backImg,
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
        <h1>Add/Edit Profile Images:</h1>
        <form  onSubmit={submitHandler} className='col mx-auto'>
            <div className='d-flex justify-content-between'>
                <div className=' mb-4'>
                    <label>Profile:</label>
                </div>
                <div>
                    <input type="text" value = {profile} className="form-control" onChange={(e)=> setProfile(e.target.value)}></input>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='mb-4'>
                    <label>Background Image:</label>
                </div>
                <div>
                    <input type="text" value = {backImg} className="form-control" onChange={(e)=> setBackImg(e.target.value)}></input>
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
                <button className='btn btn-info mt-3  '>Polish It!</button>
            </div>
        </form>
    </div>
  )
}

export default EditProfile