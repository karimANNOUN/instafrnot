
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAuthUser, setIsAuth } from '../../store/cartSlice';




export const Register = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
   
const dispatch=useDispatch()
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit =async (e) => {
      e.preventDefault();
try{
  const response = await fetch(`${process.env.REACT_APP_HOST}/register`,{
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  email , name , password }),
       
      });
      if(response.status === 200){
    
    const data = await response.json()
       dispatch(setAuthUser(data.user))
      dispatch(setIsAuth(true))
     navigate('/')
      
     
     
      }
}catch(error){
  console.log(error)
}
    
     
      // Perform login logic here
      
      
      setName('');
      setPassword('');
      setEmail('');
    };
 
    const handleClick=()=>{
      navigate('/login')
    }



  return (
    <Box sx={{ display:"flex" , justifyContent:"center" , mx:2 , alignItems:"center" , minHeight:"100vh"}}>
     
     <form >
      <TextField
        label="Name"
        value={name}
        onChange={handleNameChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
        Register
      </Button>
      <Button sx={{ml:2}} onClick={handleClick} variant="contained" color="primary">
        Login
      </Button>
    </form>
     


    </Box>
  )
}
