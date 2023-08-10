import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React ,{useState,useEffect} from 'react'

import { Box } from '@mui/material';
import Link from '@mui/joy/Link'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios'
import { setAuthUser, setIsAuth } from '../../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
export const Profil = () => {
 const dispatch=useDispatch()
  const user = useSelector(state=> state.app.authUser)
const navigate=useNavigate()



  const [users,setUsers]=useState([])

  useEffect(()=>{
    async function getUser(){
      try{
        await axios.get(`${process.env.REACT_APP_HOST}/getuser`,{
          withCredentials:true
        }) 
        .then(res=> setUsers(res.data)  )
        .catch(err=>console.log(err))
      }catch(error){
        console.log(error)
      }
      
     }
   getUser()   
   },[])
   

   const logout = ()=>{
    window.open(`${process.env.REACT_APP_HOST}/logout`,"_self")
    dispatch(setAuthUser({}))
    dispatch(setIsAuth(false))  
  }

  return (
    <div>
      <Box sx={{ml:{ md:1,lg:3}}}>
      <Box sx={{ my:4 , display:"flex"  , justifyContent:"space-between"     }}>
        <div style={{display:'flex' ,alignItems:'center' }} >
         <Link href='personel'>
         <Avatar sx={{ width: 42, height: 42 }} alt="Remy Sharp" src={ user == null ? "" : user.imageUrl }  />
         </Link>
         <div style={{display:'flex' ,flexDirection:'column'}} >
      <Typography sx={{ml:2 }}  variant="subtitle2" gutterBottom>
        { user == null ? "" : user.name }
        </Typography>
        <Typography sx={{ml:2 }}  variant="caption" display="block"  gutterBottom>
         {user == null ? "" : user.name}
      </Typography>
      </div>
      </div>
    <Button onClick={logout} >Deconnect</Button>
      </Box>

      <Stack sx={{display:"flex" , flexDirection:"row" ,justifyContent:"space-between"}} >
      <Typography variant="body2" gutterBottom>
      Suggestions pour vous
      </Typography>
   
        <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
        {'Voir tous'}
        </Link>
       
  
    
      </Stack>
      <Box sx={{height: 300 ,overflow:'auto'}} >
      { !users.user ? "" :users.user.map(item => (
           <Box key={item.id} sx={{ mt:1 , display:"flex" , justifyContent:"space-between"     }}>
          <div style={{display:'flex' ,alignItems:'center' }} >
          <Link href={`/users/${item.id}`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
           <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={item.imageUrl} />
           </Link>
           <div style={{display:'flex' ,flexDirection:'column'}} >
        <Typography sx={{ml:2 }}  variant="subtitle2" gutterBottom>
          {item.name}
          </Typography>
          <Typography sx={{ml:2 }}   variant="caption" display="block"  gutterBottom>
          {item.name}
       
        </Typography>
        
        </div>
        </div>
      { item.id === user.id ? "" : ( !item.followers ? "" : (item.followers.find(por=>por.followId === user.id) ? <Button color='inherit' onClick={()=>navigate(`/users/${item.id}`)}  >Suivi</Button> : <Button color='primary' onClick={()=>navigate(`/users/${item.id}`)}  >Suivre</Button>))}
        </Box>
      ))}
    </Box>
      <Stack sx={{mt:3 , display:"flex" ,flexDirection:"row" , flexWrap:"wrap"}}> 
        
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>À propos</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>Aide</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>press</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>Api</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>Emploi</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>Confidentialité</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>Conditions</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>Lieux</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary" mr={1}>langue</Link> 
          <Link href='/' underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">meta verified</Link>
        
      </Stack>

      <Typography mt={2} variant="overline" display="flex" gutterBottom>
      © 2023 INSTAGRAM PAR META
      </Typography>




      </Box>

     
    </div>
  )
}
