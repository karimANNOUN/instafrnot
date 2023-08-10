import * as React from 'react';
import { useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios'
export const Search = ({show,setShow}) => {
   

    const handleClose = () => setShow(false);
  
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
     
    
  
     useEffect(()=>{
      async function getUser(){
        try{
          await axios.get(`${process.env.REACT_APP_HOST}/getuser`,{
            withCredentials:true
          }) 
          .then(res=> console.log(res.data)  )
          .catch(err=>console.log(err))
        }catch(error){
          console.log(error)
        }
       
       }
     getUser()   
     },[])
    
  return (
    
    <Modal
    open={show}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
     hhhhhhhhhhhhhhhhhhhhhhhh
    </Box>
  </Modal>
  )
}
