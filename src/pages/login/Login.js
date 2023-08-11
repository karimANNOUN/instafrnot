import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';

import { TextField} from '@mui/material';
import Button from '@mui/material/Button';

import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthUser, setIsAuth } from '../../store/cartSlice';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const dispatch=useDispatch()
  const navigate=useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };



  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`,{
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email , password }),
       
      });
       const data = await response.json();
      if(response.status === 200){
        dispatch(setIsAuth(true))
        dispatch(setAuthUser(data.user))
       navigate('/')
      }else{
         await response.json()
      
      }
    }catch(error){
      console.log(error)
    }
   
    // Perform login logic here
   
    // Reset form fields
    setEmail('');
    setPassword('');
  };
  const isAuth = useSelector(state=> state.app.isAuth)
useEffect(()=>{
  if (isAuth === true) {
    navigate('/')
  }if(isAuth === false) {
    navigate('/login')
  } 
   // eslint-disable-next-line
},[isAuth])


const handleClick=()=>{
  navigate('/register')
}


  return (
    <Box sx={{ display:"flex" , justifyContent:"center" , alignItems:"center",minHeight:'100vh' }} >
        
       
   <Box sx={{   width: "75%", height: "55%"}}  >
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type='email'
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
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      <Button sx={{ml:2}} onClick={handleClick} variant="contained" color="primary">
        Register
      </Button>
    </form>
    </Box>
    

            
    </Box>
  )
}
