import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import SgsForm from './SgsForm'
import Board from '../Images/Board.png'
import Binding from '../Images/Binding.png'
import Boot from '../Images/Boot.png'
import NavBar from './NavBar'


const OneSgs = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [username, setUserName] = useState('')

    const [sgs,setSGS] = useState({})

useEffect(()=>{
    axios.get(`http://localhost:8000/api/oneSGS/${id}`, {withCredentials:true})
    .then((res)=>{
        setSGS(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

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


const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/deleteSGS/${id}`,{withCredentials:true})
    .then((res)=>{
        console.log('Deleted from db')
        navigate('/homeProfile')
    })
    .catch((err)=>{
        console.log(err)
    })
}

    return (
        <div>
        {/* <NavBar/> */}
        <div className="col-8 mx-auto text-start mt-3" >
            <div className="d-flex row">
                <div className='col'>
                    <h1>{username}, check out your CUSTOM RESULTS!</h1>
                </div>
                <div className='col text-end'>
                    <button className='btn btn-danger border border-dark border-3'><Link to={`/sgs/${sgs._id}/edit`}> edit</Link></button>
                    <button className='btn btn-danger border border-dark border-3' onClick={(e)=>deleteHandler(sgs._id)}>Delete Style</button>
                </div>
            </div>
            <div className="card mt-3 mx-auto">
                <div className='m-3 d-flex row'>
                    <div className='d-flex justify-content-evenly col'>
                        <div className=''>
                            <div className=''>
                                <img className='col' src={Board}/>
                            </div>
                            <h1 className="mb-4">Snowboard Style:</h1>
                            <h4 className="mb-4"> {sgs.boardStyle} </h4>
                            <h1 className="mb-4">Snowboard Height Range: </h1>
                            <h4 className="mb-4"> {sgs.boardHeight} </h4>
                        </div>
                        <div>
                            <div className='h-75'>
                                <img className='col' src={Boot}/>
                            </div>
                            <div className=''>
                                <h1 className="mb-4">Boot Style:  </h1>
                                <h4 className="mb-4">{sgs.bootStyle}  </h4>
                            </div>
                        </div>
                        <div>
                            <div className='h-75'>
                                <img className='col' src={Binding}/>
                            </div>
                            <h1 className="mb-4">Binding Style:</h1>
                            <h4 className="mb-4"> {sgs.bindingStyle} </h4>
                        </div>
                    </div>
                    {/* <div className="col-4 mt-2">
                        <p className="mb-4">{sgs.style}</p>
                        <p className="mb-4">{sgs.height}</p>
                        <p className="mb-4">{sgs.height}</p>
                        <p className="mb-4">{sgs.height}</p> */}
                        {/* <div >
                            <p className="m-0 p-0">{pet.skill1}</p>
                            <p className="m-0 p-0">{pet.skill2}</p>
                            <p className="m-0 p-0">{pet.skill3}</p> 
                        </div>  */}
                    {/* </div> */}
                </div>
            </div>
            <div className='col text-end'>
                    <button className='btn btn-danger border border-dark border-3'><Link to={'/riderForum'}> Check Out the Rider Forum To See Other Rider Results!</Link></button>
                </div>
    </div>
    </div>
    )
}

export default OneSgs;