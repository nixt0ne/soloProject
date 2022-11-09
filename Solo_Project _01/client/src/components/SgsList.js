import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar';


const SgsList = () => {
    // const [username, setUserName] = useState('')
    const [list,setList] = useState([])
    const [profile, setProfile] = useState('')
    const [backImg, setBackImg] = useState('')
    // const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
        .then((res)=>{
            console.log("res.data", res)
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


    useEffect(()=>{
        axios.get('http://localhost:8000/api/homeProfile', {withCredentials:true})
        .then((res)=>{
            console.log(res.data)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const removeFromList= (id) => {
        console.log(list)
        setList(list.filter(sgsSelector=>sgsSelector._id !== id))

    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteSGS/${id}`,{withCredentials:true})
        .then((res)=>{
            console.log(id)
            removeFromList(id)
            navigate('/homeProfile')
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div>
            {/* <NavBar username={username} setUserName={setUserName}/> */}
        <div className="row mx-auto">

            <div className=' col-3 h-75 mx-auto'>
                <img className='col-8 h-75' src={profile}/>
                {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
            </div>
            <div className='col-3 h-75 mx-auto'>
                <img className='col-8 h-75' src={backImg}/>
                {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
            </div>
            <div className='d-flex col-8 mx-auto'>
                <div className='col' style={{backgroundColor: "blue"}}>
                    <button className='btn btngrad btn-danger btn-lg m-3'><Link to={'/snowboardGearSelector'}>Gear Selector</Link></button>
                </div>
                <div className='col' style={{backgroundColor: "green"}}>
                    <button className='btn btngrad btn-danger btn-lg m-3'><Link to={'/riderForum'}>Rider Forum</Link></button>
                </div>
            </div>
            <div className="col-8 mx-auto text-center">
                <div className="col-8">
                    <div className="col-8">
                        <h1>Your Ride Styles:</h1>
                    </div>
                </div>
            </div>
            <div className="col-8 mx-auto mt-3 text-start">
                <div>
                    <table className=" table table-bordered table-striped ">
                        <thead>
                            <tr className="table-active">
                                {/* <th>Name</th> */}
                                <th>Style</th>
                                <th>Height</th>
                                {/* <th>Foot Size</th> */}
                                <th>Board Style</th>
                                <th>Board Size</th>
                                <th>Boot Type</th>
                                <th>Binding Type</th>
                                <th>Date Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                        {

                        list.map((sgsSelector, index)=>{
                            return(
                                <tr key={index} className="mt-3 ">
                                        {/* <td className="col-1">{sgsSelector.username}</td> */}
                                        <td className="col-1"><Link to= {`/sgs/${sgsSelector._id}`}>{sgsSelector.style}</Link></td>
                                        <td className="col-1">{sgsSelector.height}</td>
                                        <td className="col-1">{sgsSelector.boardStyle}</td>
                                        <td className="col-1">{sgsSelector.boardHeight}</td>
                                        <td className="col-1">{sgsSelector.bootStyle}</td>
                                        <td className="col-1">{sgsSelector.bindingStyle}</td>
                                        <td className="col-1">{sgsSelector.updatedAt}</td>
                                        <td className="col-1">
                                            <button className='btn btngrad btn-danger btn-sm m-3' onClick={(e)=>deleteHandler(sgsSelector._id)}>Remove</button>
                                        </td>
                                </tr>
                                )
                            }
                            
                            )

                        }
                        </tbody>
                    </table>
            </div>
            <div className="col"></div>
        </div>
    </div>
    </div>

    )
}


export default SgsList;