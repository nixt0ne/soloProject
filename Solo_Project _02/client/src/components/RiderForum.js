import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fontSize } from '@mui/system';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

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
        axios.get('http://localhost:8000/api/allForum', {withCredentials:true})
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
            <div className="row mx-auto " style={{backgroundImage: `url("https://thumbs.dreamstime.com/z/seamless-pattern-memphis-style-vector-illustration-design-website-background-banner-retro-abstract-geometric-element-63225774.jpg")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className='col-8 mx-auto  mt-3 rounded-top overflow-hidden' style={{backgroundColor: 'black'}}>
                    <h1 style={{color: 'white', fontWeight: "bold"}} >The Rider CREW Forum</h1>
                </div>
                <div className="col-8 mx-auto text-start p-3" style={{backgroundColor: 'lightblue'}}>
                {

    list.map((sgsSelector, index)=>(
                <div key={index} className="m-1 ">
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor: 'white'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
                                <div className='d-flex justify-content-around align-items-center '>
                                    <div>
                                        <Typography variant="h5" component="div">
                                            <div className=''>
                                                <div>
                                                    <img className='' src={sgsSelector?.createdBy?.profile} style={{width: 100, height: 100, borderRadius: '50%'}}/> 
                                                </div>
                                                <div className='text-center mt-3'>
                                                    {sgsSelector?.createdBy?.username}
                                                </div>
                                            </div>
                                        </Typography >
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary" className='text-center'>
                                        {sgsSelector.style}
                                        </Typography>
                                    </div>
                                    <div className='align-middle'>
                                        <Typography variant="body2">
                                            <div className='row p-2'>
                                                <div className="col " >
                                                    <div className='align-text-top'>
                                                        <h4 className="" style= {{fontWeight: "bold"}}>Height:</h4>
                                                    </div>
                                                    <div className='align-text-bottom'>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <h4  style= {{fontWeight: "bold"}}>Board Style:</h4>
                                                </div>
                                                <div className="col">
                                                    <h4 style= {{fontWeight: "bold"}}>Board Height:</h4>
                                                </div>
                                                <div className="col">
                                                    <h4   style= {{fontWeight: "bold"}}>Boot Style:</h4>
                                                </div>
                                                <div className="col">
                                                    <h4   style= {{fontWeight: "bold"}}>Binding Style:</h4>
                                                </div>
                                            </div>
                                            <div className='row p-2'>
                                                <div className="col " >
                                                    <div className='align-text-bottom'>
                                                        <h4>{sgsSelector.height} ft</h4>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <h4 className=''> {sgsSelector.boardStyle}</h4>
                                                </div>
                                                <div className="col">
                                                    <h4>{sgsSelector.boardHeight} ft</h4>
                                                </div>
                                                <div className="col">
                                                    <h4>{sgsSelector.bootStyle}</h4>
                                                </div>
                                                <div className="col">
                                                    <h4>{sgsSelector.bindingStyle}</h4>
                                                </div>
                                            </div>
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions className='justify-content-end'>
                                Created At: {sgsSelector.updatedAt}
                            </CardActions>
                    </Card>

                </div>

            )
        
        )

    }
                

            </div>
            
        </div>
    </div>

    )
    
}


export default SgsList;