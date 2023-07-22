import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

const handleClick = () =>{
navigate("/Login")
}

const handleLogout=()=>{
  localStorage.clear();
  navigate("/dashboard")
  // window.location.reload();
}


  return (
    <>
    <Box border={"2px solid gray"} margin={"50px auto"} >
    <AppBar>
            <Toolbar>
                <Typography sx={{cursor:"pointer"}} variant='h6'>Home</Typography>
                <div style={{marginLeft:"auto"}}>
                    <Button sx={{marginRight:"20px"}} onClick={handleClick} variant='contained'>Login</Button>
                    <Button onClick={handleLogout} variant='contained'>LogOut</Button>
                </div>
            </Toolbar>
        </AppBar>
    </Box>
        
    </>
  )
}

export default Navbar