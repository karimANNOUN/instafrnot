import React from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { useSelector } from 'react-redux';
import IconButton from '@mui/joy/IconButton';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { DeletePost } from './DeletePost';
import { BoxComment } from './BoxComment';
import {AddComment} from './AddComment'
import { useNavigate } from 'react-router-dom';
export const PostUser = ({open,setOpen,post,allUser}) => {
  const navigate=useNavigate();
    
    const userPosts = useSelector(state=> state.app.userPosts)
   
    const handleClose = () =>{
      setOpen(false);
      navigate(`/users/${allUser.id}`)
    } 

    const [anchorEl, setAnchorEl] = React.useState(null);
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
           <img style={{width:"100%",height:"100%"}}  src={ !userPosts ? "" : userPosts.content} alt='krimou' />
        </Box>
        <Box sx={{paddingLeft:2 ,height:{ xs:'40%' ,sm:"100%"} ,width:{ xs:'100%' ,sm:"45%"}  }}>
        <Box sx={{display:'flex', width:{xs:'95%',sm:'95%'} , justifyContent:"space-between" ,padding:1,borderBottomColor:'grey' ,borderBottomStyle:'solid' , borderWidth:"80%"}}>
          <Box sx={{display:'flex',my:1}}>
          <Avatar sx={{ width: 30, height: 30 , mr:2 }} src={ allUser.imageUrl } alt="karim announ"  />
        <Typography>{ allUser.name}</Typography>
          </Box>
      
        <div>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}  
        id="basic-button"
        aria-controls={ouvrier ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ouvrier ? 'true' : undefined}
        onClick={handleClick} >
        <MoreHoriz />
      </IconButton>
        </div>
        </Box>
        <Box sx={{height:{ xs:'50%' ,sm:"80%"},width:{xs:'95%',sm:'100%'},overflow:'auto'}}>
          { !userPosts ? "" : (userPosts.comment ? (open === true ? userPosts.comment.map(com=><BoxComment key={com.id} com={com} />) : "") : "") }
          </Box>
          <div>
            <AddComment post={post}/>
        </div>
        </Box>
        
      </Box>
      
    </Modal>
    <div><DeletePost post={post} ouvrier={ouvrier}  anchorEl={anchorEl} setOpen={setOpen}  setAnchorEl={setAnchorEl}/> </div>
    </div>
  )
}
