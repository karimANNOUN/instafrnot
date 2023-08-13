import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



import { useNavigate } from 'react-router-dom';
import Link from '@mui/joy/Link'
import { Avatar } from '@mui/material';

export const BoxComments = ({openComments,setOpenComments,pos}) => {

  const navigate=useNavigate()
  
    const handleClose = () =>{
      setOpenComments(false);
      navigate('/')
    }
   




    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs:'70%' ,sm:'40%' , md:"40%"},
        height:'85%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow:'auto'
      };
  return (
    <div>
          <Modal
        open={openComments}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            { !pos.comment ? "" : (pos.comment.map(com=>
        <div key={com.id} com={com} style={{display:'flex', justifyContent:'space-between'}}> 
    <div style={{display:'flex',alignItems:'center'}}>
    <Link href={`/users/${com.authorId}`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
    <Avatar src={com.author.imageUrl} sx={{ width: 24, height: 24 ,mr:2 }} alt='krim' />
        <Typography variant="subtitle2" gutterBottom sx={{mr:1}}>{com.author.name }</Typography>
        </Link>
        <Typography variant="caption" gutterBottom>{com.content}</Typography>
        </div>
       
    </div>
    
    ))}
        </Box>
      </Modal>
      
    </div>
  )
}
