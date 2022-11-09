import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = () => {

let activeStyle = {
    color: "red",
};

    return (
        <div className="bg-dark col-12 no-gutter fluid">
            <NavLink to = "/homeProfile" className="m-3" style={({isActive})=> isActive ? activeStyle : undefined}>Home</NavLink>
            <NavLink to = "/snowboardGearSelector" style={({isActive})=>isActive ? activeStyle:undefined}>Gear Selector</NavLink>
        </div>

    )
}

export default NavBar