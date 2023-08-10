import React , {useEffect} from 'react'

import { Posts , Profil} from './index'
import { useSelector,useDispatch } from 'react-redux';
import { setAuthUser, setIsAuth } from '../../store/cartSlice';
import { Box } from '@mui/material';
import { useNavigate} from 'react-router-dom';

export const Home = () => { 
const dispatch= useDispatch()

const navigate=useNavigate()
const isAuth=useSelector(state=> state.app.isAuth)
useEffect(()=>{
  async function getUser() {
try{
  const response = await fetch(`${process.env.REACT_APP_HOST}/user`,{
    credentials:"include"
  })
  
const data = await response.json();


if ( data !== undefined ) {
  dispatch(setAuthUser(data))
  dispatch(setIsAuth(true))   
 
}
}catch(error){
  console.log(error)
}
   
 
 
}
getUser()

if (isAuth === false) {
  navigate('/login')
 }else{
  navigate('/')
 }


 // eslint-disable-next-line
},[isAuth])



 

 


  
  return (
  
  
    <div>
         
         
       <Box sx={{display:'flex'}}>
        <Box sx={{ width:{xs:'80%',md:'70%',lg:'60%'}  }}>
        <Posts/>
        </Box>
       
        
       
        <Box sx={{width:'30%',display:{xs:'none',md:'block'} }}>
        <Profil  />
        </Box>
       

       </Box>
        
        
       
         
       
         
    </div>
  )
}
