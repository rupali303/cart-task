import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({register,role}) {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [pass, setpass] = useState("")
    const [loginError, setLoginError] = useState(false);
    // const [isLogged, setIsLogged] = useState(false)



    const handleUserChange = (e) => {
        setName(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setpass(e.target.value)
    }
    
    const handleRegister = () => {
        navigate("/register")
    }

    const handleLogin = ()=>{
        const userData = {
            name,
            pass
        };
       const storedUserData = localStorage.setItem('user',JSON.stringify(userData))

       


    const matchStaffData = localStorage.getItem("register");
    
        const userStaffData = JSON.parse(matchStaffData)

        const matchHodData = localStorage.getItem("user");
        const userLoginData = JSON.parse(matchHodData)

        // if(userLoginData.name===register.name && userLoginData.pass===register.pass){
        //     alert("Login successfully")
        // }else{
        //     alert("Invalid creadentials")
        // }

        // if(register.user === user.name && register.pass === user.pass){
        //     alert("Login successfully")
        // }else{
        //     alert("Invalid creadentials")
        // }



        if (userStaffData.role === "hod") {
            navigate("/HodDashboard")
        }else if 
            (userStaffData.role === "staff")
        navigate("/StaffDashboard")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const storedData = localStorage.getItem('user');

        if(storedData){
         const user = JSON.parse(storedData)  

         if (user === storedData.user && pass === storedData.pass) {
            setLoginError(false);
            alert('Login successfully!');
            setName('');
            setpass('');
          } else {
            setLoginError(true);
          }
        } else {
          setLoginError(true);
        }
    }

    return (
        <>
            <form onClick={handleSubmit}>
                <Box display={"flex"}
                    flexDirection={"column"}
                    border={"1px solid gray"}
                    margin={"40px auto"}
                    maxWidth={"350px"}
                    padding={"50px"}
                    borderRadius={"10px"}
                    boxShadow={"2px 2px 5px gray"}
                    sx={{
                        ":hover": {
                            boxShadow: "4px 4px 10px gray"
                        }
                    }}

                >
                    <Typography textAlign={"center"}  variant='h5'>Login</Typography>
                    <TextField margin='normal' type='text' name='username' placeholder='Enter name' value={name.username} onChange={handleUserChange} />
                    <TextField margin='normal' type='password' name='password' placeholder='Enter password' value={pass.password} onChange={handlePasswordChange} />
                    <Button onClick={handleLogin} type='submit' sx={{ padding:"12px 45px",margin:"15px auto" }} variant='contained'>Login</Button>
                    <Button onClick={handleRegister} >Register</Button>
                </Box>
            </form>

        </>
)

}


export default Login



// const storedFormData = localStorage.getItem('formData');

// if (storedFormData) {
//   // Parse the stored form data back to an object
//   const formData = JSON.parse(storedFormData);

//   // Compare the login credentials with the stored form data
//   if (email === formData.email && password === formData.password) {
//     // Successful login
//     setLoginError(false);
//     alert('Login successful!');
//     // Reset the form fields
//     setEmail('');
//     setPassword('');
//   } else {
//     // Incorrect login credentials
//     setLoginError(true);
//   }
// } else {
//   // No registration data found
//   setLoginError(true);
// }
// };