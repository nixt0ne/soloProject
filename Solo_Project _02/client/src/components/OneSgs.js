import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import SgsForm from './SgsForm'
import Board from '../Images/Board.png'
import Binding from '../Images/Binding.png'
import Boot from '../Images/Boot.png'
import Height from '../Images/Height.png'
import NavBar from './NavBar'
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const OneSgs = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [username, setUserName] = useState('')
    const [apiState, setApiState] = useState ([])

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

// useEffect(()=> {
//     axios.get ('https://www.breakingbadapi.com/api/characters/1')
//     .then ((res)=>{
//     console.log("snow api data" + res)
//     setApiState(res.data.results)
//     })
//     .catch((error)=>{
//     })
// },[])


    return (
        <div style={{backgroundImage: `url("https://thumbs.dreamstime.com/z/trendy-memphis-style-seamless-pattern-inspired-s-s-retro-fashion-design-colorful-festive-hipster-background-abstract-doodle-85336089.jpg")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height:"635px"}}>
        {/* <NavBar/> */}

            <div className="col-8 mx-auto text-start"  >

                <div className=" mx-auto" >
                        <div className='d-flex row  '>
                    <div className="mt-3 rounded-top overflow-hidden" style={{backgroundColor: 'black', }} >
                        <div className="d-flex row mt-3" >
                            <div className='col-7'>
                                <h1 style={{color: 'white'}}>{username}, check out your CUSTOM RESULTS!</h1>
                            </div>
                            <div className='col-5 text-end d-flex'>
                                <div className=''>
                                    <Link to={`/sgs/${sgs._id}/edit`} style={{textDecoration: 'none'}}><Button type="button" className = "m-3 col" variant="contained" endIcon={<RocketLaunchIcon/>}>Edit Selection</Button></Link>
                                </div>
                                <div>
                                    <Button onClick={(e)=>deleteHandler(sgs._id)} color="error" type="button" className = "m-3 col" variant="contained" endIcon={<RocketLaunchIcon/>}>Delete</Button>
                                    {/* <button className='btn btn-danger border border-dark border-3'><Link to={`/sgs/${sgs._id}/edit`}> edit</Link></button>
                                    <button className='btn btn-danger border border-dark border-3' onClick={(e)=>deleteHandler(sgs._id)}>Delete Style</button> */}
                                </div>
                            </div>
                        </div>
                                    <div className='row ' style={{backgroundColor: 'white', }} >
                                        <div className='col card m-1 p-3 d-flex ' style= {{height: "230px", width:"450px"}} >
                                            <div className='row '>
                                                <div className='col mx-auto '>
                                                    <img className='' src={Board} style= {{height: "200px", width:"80px"}}/>
                                                </div>
                                                <div className='col mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold"}}>Snowboard Style:</h1>
                                                    <h4 className="mb-4"> {sgs.boardStyle} </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col card m-1 p-3 d-flex ' style= {{height: "230px", width:"450px"}} >
                                            <div className='row ' >
                                                <div className='col mx-auto '>
                                                    <img className='' src={Height} style= {{height: "200px", width:"80px"}}/>
                                                </div>
                                                <div className='col mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold"}}>Snowboard Height:</h1>
                                                    <h4 className="mb-4"> {sgs.boardHeight} ft</h4>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className=' col card m-3 p-3' style= {{height: "250px", width:"450px"}}>
                                            <img className='col ' src={Board} style= {{height: "200px", width:"80px"}}/>
                                            <h1 className="mb-4">Snowboard Height Range: </h1>
                                            <h4 className="mb-4"> {sgs.boardHeight} </h4>
                                        </div> */}
                                    </div>
                                    <div className='row' style={{backgroundColor: 'white', }}>
                                    <div className='col card m-1 p-3 d-flex ' style= {{height: "230px", width:"450px"}} >
                                            <div className='row '>
                                                <div className='col mx-auto '>
                                                    <img className='' src={Boot} style= {{height: "150px", width:"150px"}}/>
                                                </div>
                                                <div className='col mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold"}}>Boot Style:</h1>
                                                    <h4 className="mb-4"> {sgs.bootStyle} </h4>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className=' col card m-3 ' style= {{height: "250px", width:"450px"}}>
                                                <img className='' src={Boot} style= {{height: "150px", width:"150px"}}/>
                                                <h1 className="mb-4">Boot Style:  </h1>
                                                <h4 className="mb-4">{sgs.bootStyle}  </h4>
                                        </div> */}
                                                <div className='col card m-1 p-3 d-flex ' style= {{height: "230px", width:"450px"}} >
                                            <div className='row '>
                                                <div className='col mx-auto '>
                                                    <img className='' src={Binding} style= {{height: "150px", width:"150px"}}/>
                                                </div>
                                                <div className='col mx-auto'>
                                                    <h1 className="mb-4" style= {{fontWeight: "bold"}}>Binding Style:</h1>
                                                    <h4 className="mb-4"> {sgs.bindingStyle} </h4>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='col card m-3' style= {{height: "250px", width:"450px"}}>
                                                <img className='' src={Binding} style= {{height: "150px", width:"150px"}}/>
                                                <h1 className="mb-4">Binding Style:</h1>
                                                <h4 className="mb-4"> {sgs.bindingStyle} </h4>

                                        </div> */}
                                                            <div className='text-center' style={{backgroundColor: 'white', }}>
                        <Link to={`/riderForum`} style={{textDecoration: 'none'}}><Button type="button" className = "m-3 col" variant="contained" endIcon={<RocketLaunchIcon/>}>Check Out the Rider Forum To See Other Riders' Results!</Button></Link>
                        {/* <button className='btn btn-danger border border-dark border-3'><Link to={'/riderForum'}> Check Out the Rider Forum To See Other Rider Results!</Link></button> */}
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
                        {/* <div className="App">
                        {
                            apiState.map((pokemon)=>(
                            <div>
                                <h1>
                                {pokemon.name}
                                </h1>
                            </div>
                            ))
                        }
                        

                        </div> */}
                        {/* <div className="App">
                        {
                            apiState.map((stations)=>(
                            <div>
                                <h1>
                                {stations.name}
                                </h1>
                            </div>
                            ))
                        } */}
                        
    {/* 
                        </div> */}

                    </div>
                </div>

        </div>
        </div>
        </div>
    )
}

export default OneSgs;