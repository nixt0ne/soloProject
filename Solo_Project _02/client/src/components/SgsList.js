import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import LandscapeIcon from '@mui/icons-material/Landscape';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AcUnitIcon from '@mui/icons-material/AcUnit';


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
            <div className="tests" style={{backgroundImage: `url("https://thumbs.dreamstime.com/z/s-pattern-seamless-abstract-geometric-fashion-can-be-used-printing-website-background-fabric-design-62143338.jpg")`, height: "1000px"}}>
                    <div style={{backgroundColor: 'white'}} className='' >
                        <div className='p-5 justify-contents-center' style={{backgroundImage: `url(${backImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                        <Link to={'/editProfilePage'}><img className='border border-5 border-light' src={profile} style={{width: 200, height: 200, borderRadius: '50%'}}/></Link>
                        </div>
                    </div>
                    <div className=' d-flex mx-auto justify-content-evenly align-items-center' style={{backgroundColor: 'lightgrey'}}>
                        <div>
                            <Link to={'/snowboardGearSelector'} style={{textDecoration: 'none'}}><Button type="button" className = "m-3 col" variant="contained" endIcon={<RocketLaunchIcon/>}>Click to get your custom fit here!</Button></Link>
                        </div>
                        <div>
                            <AcUnitIcon color="primary" />
                        </div>
                        <div>
                            <Link to={'/riderForum'}><Button type="button" className = "m-3 col" variant="contained" endIcon={<GroupsIcon />}>Check out other riders on the forum</Button></Link>
                        </div>
                    </div>
                <div className="col-8 mx-auto mt-3">
                        <div className="rounded-top overflow-hidden" style={{color: 'white', backgroundColor: '#0d6efd'}}>
                            <h1>Your Ride Styles:</h1>
                        </div>
                </div>
                <div className="col-8 mx-auto text-start">
                    <div className="" style={{backgroundColor: 'white'}}>
                        <table className=" table table-striped table-hover  ">
                            <thead className='border-top border-dark'>
                                <tr className="table-primary">
                                    {/* <th>Name</th> */}
                                    <th>Style</th>
                                    <th>Height</th>
                                    {/* <th>Foot Size</th> */}
                                    <th>Board Style</th>
                                    <th>Board Size</th>
                                    <th>Boot Type</th>
                                    <th>Binding Type</th>
                                    <th>Date Created</th>
                                    <th>Created By</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                            {

                            list.map((sgsSelector, index)=>{
                                return(
                                    <tr key={index} className=" ">
                                            {/* <td className="col-1">{sgsSelector.username}</td> */}
                                            <td className="col-1"><Link to= {`/sgs/${sgsSelector._id}`}>{sgsSelector.style}</Link></td>
                                            <td className="col-1">{sgsSelector.height}</td>
                                            <td className="col-1">{sgsSelector.boardStyle}</td>
                                            <td className="col-1">{sgsSelector.boardHeight}</td>
                                            <td className="col-1">{sgsSelector.bootStyle}</td>
                                            <td className="col-1">{sgsSelector.bindingStyle}</td>
                                            <td className="col-1">{sgsSelector.updatedAt}</td>
                                            <td className="col-1">{sgsSelector?.createdBy?.username}</td>
                                            <td className="col-1">
                                            <Button type="button" className = "mt-3 col m-3" variant="outlined" endIcon={<DeleteOutlineIcon />} onClick={(e)=>deleteHandler(sgsSelector._id)}><Link to={'/homeProfile'}>Remove</Link></Button>

                                                {/* <button className='btn btngrad btn-danger btn-sm m-3' onClick={(e)=>deleteHandler(sgsSelector._id)}>Remove</button> */}
                                            </td>
                                    </tr>
                                    )
                                }
                                
                                )

                            }
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

    )
}


export default SgsList;