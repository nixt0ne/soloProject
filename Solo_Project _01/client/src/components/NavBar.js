import React, {useState, useEffect} from 'react'
import {Navigate, NavLink, useNavigate, Link} from 'react-router-dom'
import Gear from '../Images/Gear.png'
import axios from 'axios';


const NavBar = () => {
const [username, setUserName] = useState('')

const navigate =useNavigate()

let activeStyle = {
    color: "red",
};

const logout = (e) =>{
    axios.get('http://localhost:8000/api/logout', {withCredentials:true})
    .then((res)=>{
        console.log('logged out')
        navigate('/landingPage')
    }).catch((err)=>{

    })
}

useEffect(()=>{
    axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
    .then((res)=>{
        console.log("res.data", res)
        setUserName(res.data.username)
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
        <div className="d-flex bd-highlight mb-3 col-8 mx-auto ">
            <div className="p-2 bd-highlight">
            <NavLink to = "/homeProfile" className="m-3" style={({isActive})=> isActive ? activeStyle : undefined}>Home</NavLink>
            <NavLink to = "/snowboardGearSelector" style={({isActive})=>isActive ? activeStyle:undefined}>Gear Selector</NavLink>
            <NavLink to = "/riderForum" className="m-3" style={({isActive})=>isActive ? activeStyle:undefined}>Rider Forum</NavLink>
            </div>
                <div className='ms-auto p-2 bd-highlight d-flex h-100' >
                    <h4>Welcome, {username}</h4>
                    <Link to={`/editProfilePage`} className="h-100"><i className="bi bi-gear fa-2x"></i></Link>

                    {/* <Link to={`/editProfilePage/${list._id}`}><img className='col h-75' src={Gear}/></Link> */}
                    <button className="btn btn-danger btn-sm mt-3" onClick={logout}>Logout</button>
                    {/* <Link to= {`/sgs/${sgsSelector._id}`}>{sgsSelector.style}</Link> */}
            </div>
        </div>

    )
}

export default NavBar