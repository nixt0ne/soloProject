import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Register from './Register';
import Login from './Login'
import Board from '../Images/Board.png'
import NavBar from './NavBar';

const LandingPage = () => {
    
    return (
        <div>
            <div className='d-flex col-8 mx-auto justify-content-around mt-5' >

                <div >
                    <div className='m-5'>
                        <img className='col' src={Board}/>
                </div>
                </div>
                <div>
                    <Login/>
                    <hr></hr>
                    <Register/>
            </div>
            </div>
        </div>
    )
}
export default LandingPage;