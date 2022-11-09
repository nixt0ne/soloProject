import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const processData = (infoObj) => {
    const {name, style, height} = infoObj
    
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
        name,
        style,
        height,
        boardStyle,
        bindingStyle,
        bootStyle,
        boardHeight,

    }
}


const EditSgs = () => {

    const [name,setName] = useState('')
    const [style, setStyle] = useState('')
    // const [footSize, setFootSize] =useState('')
    const [height, setHeight] = useState('')
    const [errors, setErrors] = useState({})


    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneSGS/${id}`)
        .then((res)=>{
            setName(res.data.name)
            setStyle(res.data.style)
            setHeight(res.data.height)
            // setFootSize(res.data.footSize)


        })
        .catch((err)=>{
            console.log(err)
            // setNoId('Pets not found using that ID')
        })
    },[])

const submitHandler = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/updateSGS/${id}`, 
        processData({name, style, height})

    // name,
        // style,
        // // footSize,
        // height,

    )
    .then((res)=>{
        console.log(res)
        navigate(`/sgs/${id}`)
    })
    .catch((err)=>{
        console.log(err)
        setErrors(err.response.data.errors)
    })
}


return (
    <div className="col-8 mx-auto text-start mt-3" >
        <div className='col-8 h-75 mx-auto'>
            <img className='col-8 h-75' src="https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2015/12/4/top-5-snowboarding-vacations/top-5-snowboarding-whistler.jpg.rend.hgtvcom.1280.960.suffix/1491592909504.jpeg" alt="Italian Trulli"/>
            {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
        </div>
        <div className="d-flex row">
            <div className="col">
                <h1>Get Your Best Gear Fit!</h1>
            </div>
            <div className="col">
            </div>
        </div>
        <div className="col-8 mx-auto mt-3 text-start">
        <form className="card mt-3" onSubmit={submitHandler}>
            <div className="card-body d-flex">
                <div className="row m-1">
                    <label>Name:</label>
                    <div className="col-sm-10 mt-2 mb-2">
                        <input className='form-control' type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    { errors.name ? <span className="text-danger">{errors.name.message}</span> :null}<br></br>
                    <label>Style:</label>
                    <div className="col-sm-10 mt-2 mb-2">
                        <select className='form-control' type="text" value={style} onChange={(e)=>setStyle(e.target.value)}>
                            <option>Select A Style</option>
                            <option value="All-Mountain">All-Mountain</option>
                            <option value="FreeStyle">FreeStyle</option>
                            <option value="Back-Country">Back-Country</option>
                        </select>
                    </div>
                    { errors.style ? <span className="text-danger">{errors.style.message}</span> :null}<br></br>
                    <label>Height:</label>
                    <div className="col-sm-10 mt-2 mb-2">
                        <select className='form-control' type="text" value={height} onChange={(e)=>setHeight(e.target.value)}>
                            <option>Select A Height</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    { errors.height ? <span className="text-danger">{errors.height.message}</span> :null}<br></br>
                    {/* <label > Pet Descrtiption:</label> */}
                    {/* <div className="col-sm-10 mt-2 mb-2">
                        <input className='form-control' type="text" value={footSize} onChange={(e)=>setFootSize(e.target.value)}></input>
                    </div>
                    { errors.footSize ? <span className="text-danger">{errors.footSize.message}</span> :null}<br></br> */}
                    <div className="row">
                        <div className="col">
                            <button className='btn btn-lg btn-info mt-3' type="text">Get Your Custom Fit!</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>

        </form>
        </div>



    </div>
)


}

export default EditSgs;