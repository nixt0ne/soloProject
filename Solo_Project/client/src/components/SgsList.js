import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const SgsList = () => {

    const [list,setList] = useState([])
    // const {id} = useParams()
    const navigate = useNavigate()



    useEffect(()=>{
        axios.get('http://localhost:8000/api/homeProfile')
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
        axios.delete(`http://localhost:8000/api/deleteSGS/${id}`)
        .then((res)=>{
            console.log(id)
            removeFromList(id)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div className="row mx-auto">

            <div className='col-8 h-75 mx-auto'>
                <img className='col-8 h-75' src="https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2015/12/4/top-5-snowboarding-vacations/top-5-snowboarding-whistler.jpg.rend.hgtvcom.1280.960.suffix/1491592909504.jpeg" alt="Italian Trulli"/>
                {/* <img src = {list.name} className="col-8 border border-5 border-warning"/><br></br> */}
            </div>
            <div className='col-8 mx-auto' style={{backgroundColor: "blue"}}>
                <button className='btn btngrad btn-danger btn-lg m-3'><Link to={'/snowboardGearSelector'}>Gear Selector</Link></button>
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
                                <th>Name</th>
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
                                        <td className="col-1">{sgsSelector.name}</td>
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

    )
}


export default SgsList;