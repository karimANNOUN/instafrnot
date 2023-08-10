import { Box } from '@mui/material'
import React , { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import { SearchResult } from './SearchResult';
import axios from 'axios'
export const ComSearch = ({toggleDrawer}) => {

    const [user,setUser]=useState([])
    const [products,setProducts]=useState([])
    const [input , setInput]=useState("")
    const [show,setShow] = useState(false)
    useEffect(()=>{
     
        async function getUser(){
          try{
          await axios.get(`${process.env.REACT_APP_HOST}/getuser`,{
             withCredentials:true
           }) 
           .then(res=> setUser(res.data)  )
           .catch(err=>console.log(err))
          }catch(error){
            console.log(error)
          }
         }
      
       getUser()  
     
         
       },[])
      


       async function fetchProduct (value){
    
            try{
                const result = await user.user.filter((curent)=>{
                  return (value && curent && curent.name  && curent.name.toLowerCase().includes(value)) || (value && curent && curent.name  && curent.name.toUpperCase().includes(value)) || (value && curent && curent.name  && curent.name.includes(value))
       
               })     
                setProducts(result)
               }catch(error){
                 console.log(error.message)
                }
        
        
       }
 


 const handelchange = (value)=>{
    setInput(value)
    fetchProduct(value)
 }



  return (
    <div>
        <Box sx={{borderBottom:2 , borderBottomColor:'gray' }}>
        <Typography sx={{padding:4}} variant="h4" gutterBottom>
        Recherche
      </Typography>
      <Input startDecorator={<SearchIcon />} placeholder='Rechercher' value={input} onChange={(e)=>handelchange(e.target.value)} sx={{width:"90%" , mx:"auto" , mb:3}}/>
        </Box>
        <Box>
           <SearchResult products={products} show={show} setShow={setShow} toggleDrawer={toggleDrawer} /> 
        </Box>
    </div>
  )
}
