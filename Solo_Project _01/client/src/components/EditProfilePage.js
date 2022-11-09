import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Register from './Register';
import Login from './Login'
import Board from '../Images/Board.png'
import EditProfile from './EditProfile';
import EditImg from './EditImg'
import NavBar from './NavBar';
import { useParams, useNavigate, Link } from 'react-router-dom'

const EditProfilePage = () => {
    
    // const {id} = useParams()
    const navigate = useNavigate()
    const [id, setId] = useState('')

    // const [sgs,setSGS] = useState({})

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteUser/${id}`,{withCredentials:true})
        .then((res)=>{
            console.log('Deleted from db')
            navigate('/landingPage')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{
            console.log("res.data", res)
            setId(res.data._id)
            console.log(id)
            // setPassword(res.data.password)
            // setId(res.data._id)
            // setFootSize(res.data.footSize)
    
    
        })
        .catch((err)=>{
            console.log(err)
            // setNoId('Pets not found using that ID')
        })
    },[])

    return (
        <div>
        {/* <NavBar/> */}
        <div className='d-flex col-8 mx-auto justify-content-around' >
            <div className='d-flex'>
            <button className='btn btn-danger border border-dark border-3' onClick={(e)=>deleteHandler(id)}>Delete Style</button>
                <div className='m-3'>
                    <EditProfile/>
                </div>
                <hr></hr>
                <div className='m-3'>
                    <EditImg/>
                </div>
           </div>
        </div>
        </div>
    )
}
export default EditProfilePage;