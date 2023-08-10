

import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { setPostJdid , setStoryUser } from '../../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

export const OpenPhotos = ({open , setOpen}) => {
 const navigate = useNavigate()
  const [file, setFile] = useState();

  const [fileStories, setFileStories] = useState();
  const dispatch= useDispatch()
 
   const handleClose = () => setOpen(false);
 // const date= new Date();

 // setCreatedAt(date.toLocaleTimeString())


 
 const handelUpload = async(id)=>{
 

    const formData = new FormData();
    formData.append('file', file);
    try{
    axios.post(`${process.env.REACT_APP_HOST}/createpost`,formData, {
      withCredentials:true
    }) 
    .then(res=> dispatch(setPostJdid(res.data)))
    .catch(err=>console.log(err))
  }catch(error){
    console.log(error)
  }
    setTimeout(() => {
      navigate('/')    
    }, 1000);
    setOpen(false)

  

   
   
 }
 
 

 const handelUploadStories = async(id)=>{
 
    const formData = new FormData();
    formData.append('file', fileStories);
    try{
    axios.post(`${process.env.REACT_APP_HOST}/createstories`,formData, {
      withCredentials:true
    }) 
    .then(res=>dispatch(setStoryUser(res.data)))
    .catch(err=>console.log(err))
  }catch(error){
    console.log(error)
  }
    setTimeout(() => {
      navigate('/')    
    }, 1000);
    setOpen(false)
 

  
 }



  
 
    
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{ xs:'95%' ,md:'70%' ,lg:"50%"},
  height: "20%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'

};
   
      
       
      
      


  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
          <Box sx={style}>
        
        
         <div>
         <Typography>upload Image</Typography>
         <input type="file" onChange={e => setFile(e.target.files[0])} />
          
          <Button variant="outlined" onClick={handelUpload}  >published</Button>
         </div>

         <div>
          <Typography>upload stories</Typography>
         <input type="file" onChange={e => setFileStories(e.target.files[0])} />
          
          <Button variant="outlined" onClick={handelUploadStories}  >published</Button>
         </div>
        
          
          
        
        
      
        </Box>
    </Modal>
  )
}
