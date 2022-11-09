import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Register from './Register';
import Login from './Login'
import Board from '../Images/Board.png'
import NavBar from './NavBar';
<style>

</style>

const LandingPage = () => {
    
    return (
        <div>
            <div className='d-flex mx-auto' >
                <div className="p-2 d-flex col-7 align-items-center justify-content-center" style={{backgroundImage: `url("https://thumbs.dreamstime.com/z/vector-seamless-geometric-abstract-neon-pattern-memphis-style-s-bright-colors-74090766.jpg")`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: 720}}>
                    <div>
                        <div className="p-1" >
                            <div className='m-2 ' >
                                <img className='col'style={{ border:"15px solid" }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbDFnVaMNVv6JcbN0yz7CV5NjZAid-O7jrA&usqp=CAU"}/>
                                {/* <div style={{backgroundColor: "pink"}}>
                                    <h3 style={{color: "white",backgroundColor: "turquoise"}}>SGS</h3>
                                </div> */}
                            </div>
                        </div>
                        <div className='mt-5 p-3' style={{fontFamily: "Satisfy",border:"10px solid ", backgroundColor:"black" }}>
                            <h1 className='mt-2' style={{color: "white", fontSize: "75px", fontFamily: "Satisfy", backgroundColor:"black" }}>Snowboard Gear Selector</h1>
                            <p style={{color: "turquoise", fontSize: "20px", fontFamily: "", backgroundColor:"black" }}>Let's get you the right gear for your type of ride!</p>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='my-auto col'>
                        <Login/>
                        {/* <div className='mx-auto' style={{width: '90%'}}>
                            <hr></hr>
                        </div> */}
                        <br></br>
                        <Register/>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;