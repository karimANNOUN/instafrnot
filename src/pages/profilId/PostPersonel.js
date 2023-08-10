import React, { useEffect } from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { BoxComment } from './BoxComment';
import { useSelector } from 'react-redux';
import IconButton from '@mui/joy/IconButton';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { AddComment } from './AddComment';
import { DeletePost } from './DeletePostProfil';
import { useNavigate } from 'react-router-dom';
export const PostPersonel = ({open,setOpen,post}) => {
const navigate = useNavigate()

const user = useSelector(state=> state.app.authUser)
const myPosts= useSelector(state=>state.app.myPosts) 
   
    const handleClose = () =>{
      setOpen(false);
      navigate('/personel')
    } 
    const [postId,setPostId]=useState(Number)
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    useEffect(()=>{
      if(open === true){
        setPostId(myPosts.id)
      }
    },[open,myPosts.id])
   
    
  const ouvrier = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs:'95%' ,md:'90%' ,lg:"70%"},
        height: "90%",
        bgcolor: 'Window',
        border: '2px solid #000',
        boxShadow: 24,
        display:'flex',
        flexDirection:{xs:'column' ,sm:'row'}
        
      };
  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{height:{ xs:'60%' ,sm:"100%"},width:{xs:'100%',sm:"55%"}  }}>
           <img style={{width:"100%",height:"100%"}}  src={myPosts.content} alt='krimou' />
        </Box>
        <Box sx={{paddingLeft:2 ,height:{ xs:'40%' ,sm:"100%"} ,width:{ xs:'100%' ,sm:"45%"}  }}>
        <Box sx={{display:'flex', width:{xs:'95%',sm:'95%'}, justifyContent:"space-between" ,borderBottomColor:'grey' ,borderBottomStyle:'solid' , borderWidth:"80%"}}>
          <Box sx={{display:'flex',my:1}}>
          <Avatar sx={{ width: 30, height: 30 , mr:3 }} src={ user == null ? "" : user.imageUrl } alt="karim announ"  />
        <Typography>{user == null ? "" : user.name}</Typography>
          </Box>
      
        <div>
        <IconButton variant="plain" color="neutral" size="sm"   
        id="basic-button"
        aria-controls={ouvrier ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ouvrier ? 'true' : undefined}
        onClick={handleClick} >
        <MoreHoriz />
      </IconButton>
        </div>
        </Box>
        <Box sx={{height:{ xs:'53%' ,sm:"80%"},overflow:'auto'}}>
          { myPosts.comment ? (open === true ? myPosts.comment.map(com=><BoxComment key={com.id} com={com} />): "") : "" }
          </Box>
          <div>
            <AddComment post={post}/>
        </div>
        </Box>
        
      </Box>
      
    </Modal>
    <div><DeletePost post={post} myPosts={myPosts} postId={postId} ouvrier={ouvrier}  anchorEl={anchorEl} setOpen={setOpen}  setAnchorEl={setAnchorEl}/> </div>
  </div>
  )
}
