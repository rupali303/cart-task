import { Box, Button, FormControl, FormControlLabel,  InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register=()=> {

    const navigate = useNavigate()
    const [role, setRole] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [department, setDepartment] = React.useState('');

    const handleRadioChange = (e) => {
       const role =  e.target.value;
       setRole(role)
    //    localStorage.setItem('role',role)
    }

    const handleChange = (event) => {
        setDepartment(event.target.value);
    };
    const handleFnameChange = (event) => {
        setFname(event.target.value);
    };
    const handlelLnameChange = (event) => {
        setLname(event.target.value);
    };
    const handleEmailChange = (event) => {
        setMail(event.target.value);
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleUserChange = (event) => {
        setName(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPass(event.target.value);
    }
    const handleLogin = () => {
        navigate("/login")
    }

    const handleRegister=()=>{
        const register = {
            role,
            fname,
            lname,
            mail,
            phone,
            name,
            pass,
            department
        };
        localStorage.setItem('register',JSON.stringify(register))
    }

    return (
        <>
            <form>
                <Box display={"flex"} flexDirection={"column"} border={"1px solid gray"} margin={"90px auto"}
                    maxWidth={"450px"} padding={"40px"} borderRadius={"10px"} boxShadow={"2px 2px 5px gray"}
                    sx={{
                        ":hover": {
                            boxShadow: "4px 4px 10px gray"
                        }
                    }}>

                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel onChange={handleRadioChange} checked={role === "hod"} value="hod" control={<Radio />} label="HOD" />
                            <FormControlLabel onChange={handleRadioChange} checked={role === "staff"} value="staff" control={<Radio />} label="Staff" />

                        </RadioGroup>
                    </FormControl>

                    <div style={{ display: "flex", flexDirection: "row", gap: "35px" }}>
                        <TextField onChange={handleFnameChange} name='firstname' value={fname.firstname} type='text' sx={{ mt: 3 }} label='First name' placeholder='Enter first name' />
                        <TextField onChange={handlelLnameChange} name='lastname' value={lname.lastname} type='text' sx={{ mt: 3 }} label='Last name' placeholder='Enter last name' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "35px" }}>
                        <TextField onChange={handleEmailChange} name='email' value={mail.email} type='email' sx={{ mt: 3 }} label='Email' placeholder='Enter Email' />
                        <TextField onChange={handlePhoneChange} name='contact' value={phone.contact} type='number' sx={{ mt: 3 }} label='Contact' placeholder='Enter Contact' />
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <FormControl sx={{ width: "45%" }}>
                            <InputLabel id="select-label">Department</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={department}
                                label="department"
                                onChange={handleChange}
                            >
                                <MenuItem value="sales" >Sales</MenuItem>
                                <MenuItem value="marketing">Marketing</MenuItem>
                                <MenuItem value="computer">Computer</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "35px" }}>
                        <TextField onChange={handleUserChange} value={name.username} type='text' sx={{ mt: 3 }} label='User name' placeholder='Enter user name' />
                        <TextField onChange={handlePasswordChange} value={pass.password} type='password' sx={{ mt: 3 }} label='Password' placeholder='Enter password' />
                    </div>
                    <Button sx={{ mt: 2 }} type='submit' onClick={handleRegister} variant='contained'>Register</Button>
                    <Button onClick={handleLogin} sx={{ mt: 2 }} type='submit'>Login</Button>
                </Box>
            </form>
        </>
    )

}
export default Register