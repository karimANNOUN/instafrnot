
import { Avatar, Box,Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/joy/Link'
import Modal from '@mui/material/Modal';
export const LikeBox = ({show,setShow,myPosts}) => {
    const handleClose = () =>{
        setShow(false);
       } 

       const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:{ xs:'60%' ,sm:'40%' , md:"40%" ,lg:"20%"},
        height: "60%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        display:'flex',
        justifyContent:'flexstart',
        flexDirection:'column',
        overflow:'auto'
      //  alignItems:'center'
    
      };
  return (
  
    <Modal
    open={show}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
          <Box sx={style}>
          { !myPosts.like ? "" : myPosts.like.map(likes=>  (<Box key={likes.id} sx={{display:'flex' ,mt:2,ml:2}} >
    
          <Link href={`/users/${likes.authorId}`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
    <Avatar src={likes.author.imageUrl} sx={{ width: 24, height: 24 ,mr:2 }} alt='krim' />
    <Typography variant="subtitle2" gutterBottom sx={{mr:1}}>{likes.author.name }</Typography>
</Link>
        
    </Box>) )} 
   
    

    </Box>
    
    </Modal>
  )
}
