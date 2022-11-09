import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const processData = (infoObj) => {
    const { style, height} = infoObj
    
    let bootStyle= "Boot Style NA"
    let bindingStyle= "Binding Style NA"
    let boardStyle= "Board Style NA"
    let boardHeight = "Board Height NA"

    if (style === 'All-Mountain') {
        if(height === "4"){
            boardHeight = "4.6"
        }else if (height==="5"){
            boardHeight = "5.6"
        }else if (height==="6"){
            boardHeight = "6.6"
        }
    
    }else if(style === 'FreeStyle') {
        if(height === "4"){
            boardHeight = "3.6"
        }else if (height==="5"){
            boardHeight = "4.6"
        }else if (height==="6"){
            boardHeight = "5.6"
        }
    }else if (style === "Back-Country"){
        if(height === "4"){
            boardHeight = "3.8"
        }else if (height==="5"){
            boardHeight = "4.8"
        }else if (height==="6"){
            boardHeight = "5.8"
        }
    }

    if (style === 'All-Mountain') {
        bootStyle = "Stiff"
    }else if(style === 'FreeStyle') {
        bootStyle = 'Flexible'
    }else if (style === "Back-Country"){
        bootStyle = "Mid-Range Flex"
    }

    if (style === 'All-Mountain') {
        bindingStyle = "Stiff"
    }else if(style === 'FreeStyle') {
        bindingStyle = 'Flexible'
    }else if (style === "Back-Country"){
        bindingStyle = "Mid-Range Flex"
    }

    if (style === 'All-Mountain') {
        boardStyle = "Directional Twin"
    }else if(style === 'FreeStyle') {
        boardStyle = 'True Twin'
    }else if (style === "Back-Country"){
        boardStyle = "Directional"
    }

    // 'All-Mountain','FreeStyle', 'Back-Country'

    return {
        // name,
        style,
        height,
        boardStyle,
        bindingStyle,
        bootStyle,
        boardHeight,

    }
}

const SgsForm = () => {
    const handleChangeStyle = (event) => {
      setStyle(event.target.value);
    };
    const handleChangeHeight = (event) => {
        setHeight(event.target.value);
      };
    
    
    // const [name, setName] = useState('')
    const [style, setStyle] = useState('')
    const [height, setHeight] = useState('')
    // const [footSize, setFootSize] = useState('')
    const [errors,setErrors]=useState ({})

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/createSGS', 
            processData({style, height})
        
            // name:name,
            // style:style,
            // height:height,
            // // footSize:footSize,
            ,{withCredentials:true}
        ).then((res)=>{
            console.log(res.data)
            navigate(`/sgs/${res.data._id}`)
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

return (
    <div className="mx-auto" >
        <div className='p-1' style={{backgroundImage: `url("https://thumbs.dreamstime.com/z/seamless-pattern-memphis-style-vector-illustration-design-website-background-banner-retro-abstract-geometric-element-63225817.jpg")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "635px"}}>
            <div className='' >
                <img style={{width: 300, height: 300, borderRadius: '70%'}} className='justify-content-center ' src="https://as1.ftcdn.net/v2/jpg/01/29/71/80/1000_F_129718004_GFEyZoopoBQ7emapFD2o5QwF6UIdGx7N.jpg"/>
                {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
            </div>

            <form className="card mt-3 col-5 mx-auto p-2" onSubmit={submitHandler}>
            <div className="d-flex mx-auto mt-2" >
                    <AutoAwesomeIcon/>
                        <h1 style={{color: "black"}} > Get Your Best Gear Fit! </h1>
                    <AutoAwesomeIcon/>
                </div>
                <h4 style={{color: "black", fontSize: "15px"}} > Choose your selections below to get your custom results: </h4>
                <div className="w-50 mx-auto">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Style
                            </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={style}
                            label="Style"
                            onChange={handleChangeStyle}
                            >
                            <MenuItem value="All-Mountain">All-Mountain</MenuItem>
                            <MenuItem value="FreeStyle">FreeStyle</MenuItem>
                            <MenuItem value="Back-Country">Back-Country</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                { errors.style ? <span className="text-danger">{errors.style.message}</span> :null}<br></br>
        </div>

        <div className="w-50 mx-auto" >
            <Box sx={{ minWidth: 120 }}>
                    <FormControl size="small" fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Height
                        </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={height}
                        label="height"
                        onChange={handleChangeHeight}
                        >
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            { errors.height ? <span className="text-danger">{errors.height.message}</span> :null}<br></br>
        </div>
                
                
                <div className="card-body" style={{height:"75px"}}>
                    {/* <div className=""> */}
                        {/* <label>Name:</label>
                        <div className="col-sm-10 mt-2 mb-2">
                            <input className='form-control' type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div> 
                    { errors.name ? <span className="text-danger">{errors.name.message}</span> :null}<br></br>  */}
                        {/* <label>Style:</label>
                        <div className="col-sm-10 mt-2 mb-2">
                            <select className='form-control' type="text" value={style} onChange={(e)=>setStyle(e.target.value)}>
                                <option>Select A Style</option>
                                <option value="All-Mountain">All-Mountain</option>
                                <option value="FreeStyle">FreeStyle</option>
                                <option value="Back-Country">Back-Country</option>
                            </select>
                        </div> */}
                        
                        {/* <label>Height:</label>
                        <div className="col-sm-10 mt-2 mb-2">
                            <select className='form-control' type="text" value={height} onChange={(e)=>setHeight(e.target.value)}>
                                <option>Select A Height</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div> */}

                            <Button type="submit" className = "mx-auto" variant="contained" endIcon={<RocketLaunchIcon/>}>Get Your Custom Fit!</Button>
                                {/* <button className='btn btn-lg btn-info mt-3' type="text">Get Your Custom Fit!</button> */}
                    {/* </div> */}
                </div>

            </form>
        </div>
    </div>


)
}

export default SgsForm;