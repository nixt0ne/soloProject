import React, {useState, useEffect} from 'react'
import {Navigate, NavLink, useNavigate, Link} from 'react-router-dom'
import Gear from '../Images/Gear.png'
import axios from 'axios';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LandscapeIcon from '@mui/icons-material/Landscape';

const pages = ['Gear Selector', 'Rider Forum'];
const urls = {'Gear Selector':'/snowboardGearSelector', 'Rider Forum':'/riderForum', 'Account':'/editProfilePage','Logout':'/Logout' }
const urlsSettings = {'Account':'/editProfilePage','Logout':'Logout' }
const settings = ['Account','Logout'];




const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [username, setUserName] = useState('')
    const [profile, setProfile] = useState('')
    const navigate =useNavigate()
    
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = (path) => {
      setAnchorElNav(null);
      navigate(path)

    };
  
    const handleCloseUserMenu = (path) => {
      setAnchorElUser(null);
      if(path!= "Logout") {
        console.log("navigate")
        navigate(path)

    } else {
      console.log("else")  
      logout()

    }
    };




// let activeStyle = {
//     color: "red",
// };

const logout = (e) =>{
    axios.get('http://localhost:8000/api/logout', {withCredentials:true})
    .then((res)=>{
        console.log('logged out')
        navigate('/landingPage')
    }).catch((err)=>{

    })
}

useEffect(()=>{
    axios.get(`http://localhost:8000/api/getLoggedUser`,{withCredentials:true})
    .then((res)=>{
        console.log("res.data", res)
        setUserName(res.data.username)
        setProfile(res.data.profile)
        // setPassword(res.data.password)
        // setId(res.data._id)
        // setFootSize(res.data.footSize)


    })
    .catch((err)=>{
        console.log(err)
        // setNoId('Pets not found using that ID')
    })
},[])

    return (
        <div className="d-flex bd-highlight mx-auto ">
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LandscapeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/homeProfile"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SGS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenu(urls[page])}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/homeProfile"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SGS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(urls[page])}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src={profile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleCloseUserMenu(urlsSettings[setting])}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


            <div className="p-2 bd-highlight">
            {/* <NavLink to = "/homeProfile" className="m-3" style={({isActive})=> isActive ? activeStyle : undefined}>Home</NavLink>
            <NavLink to = "/snowboardGearSelector" style={({isActive})=>isActive ? activeStyle:undefined}>Gear Selector</NavLink>
            <NavLink to = "/riderForum" className="m-3" style={({isActive})=>isActive ? activeStyle:undefined}>Rider Forum</NavLink>
            </div>
                <div className='ms-auto p-2 bd-highlight d-flex h-100' >
                    <h4>Welcome, {username}</h4>
                    <Link to={`/editProfilePage`} className="h-100"><i className="bi bi-gear fa-2x"></i></Link> */}

                    {/* <Link to={`/editProfilePage/${list._id}`}><img className='col h-75' src={Gear}/></Link> */}
                    {/* <button className="btn btn-danger btn-sm mt-3" onClick={logout}>Logout</button> */}
                    {/* <Link to= {`/sgs/${sgsSelector._id}`}>{sgsSelector.style}</Link> */}
            </div>
        </div>

    )
}

export default NavBar