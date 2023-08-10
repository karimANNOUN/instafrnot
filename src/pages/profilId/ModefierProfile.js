import { Box } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { useDispatch } from 'react-redux';
import {  setNewBio } from '../../store/cartSlice';

export const ModefierProfile = ({show , setShow}) => {
 
    const [file, setFile] = useState();
    const [bio,setBio]=useState("")
   
    const dispatch= useDispatch()
const handelImg=()=>{
    const formData = new FormData();
      formData.append('file', file);
      try{
        axios.post(`${process.env.REACT_APP_HOST}/createImage`,formData, {
          withCredentials:true
        }) 
       
        .catch(err=>console.log(err))
        setShow(false)
      }catch(error){
        console.log(error)
      }
    
   }

   const handelSubmit=async(e)=>{
    e.preventDefault()
    try{
      const response = await fetch(`${process.env.REACT_APP_HOST}/createBio`,{
        credentials:'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {bio} )
   })
   const bioData=await response.json()
   dispatch(setNewBio(bioData))
    setShow(false)
    }catch(error){
      console.log(error)
    }


  
  }

 

   const handleClose = () =>{
    setShow(false);
   } 

   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs:'95%' ,md:'70%' ,lg:"50%"},
    height: {xs:'40%',md:"20%"},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  };

  return (
    <Modal
    open={show}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
          <Box sx={style}>
    <Box >
        <Box sx={{mb:2}}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
       
          
          <Button variant="outlined" onClick={handelImg}  >published</Button>
        </Box>

        <Box  >
          <Box sx={{display:'flex' , justifyContent:'center',alignItems:'center'}} >
                <textarea style={{height:'30%' , width:'70%' }} onChange={e=>setBio(e.target.value)} />
                <Button variant="outlined" color="secondary" onClick={handelSubmit} sx={{ml:1}} >bio</Button>
                </Box>
                </Box>
      
        
    </Box>
    </Box>
    
    </Modal>
  )
}
