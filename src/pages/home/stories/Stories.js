import React from 'react'

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/joy/IconButton';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import 'swiper/css';
import {   useNavigate } from 'react-router-dom';
import { DeleteStories } from './DeleteStories';
export const Stories = ({open, setOpen,story,stories}) => {


const navigate=useNavigate()
 // const params=useParams();
 

 const [anchorEl, setAnchorEl] = React.useState(null);
 const ouvrier = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 




  const handleClose = () => {
    setOpen(false);
    navigate("/")
  };






  

  return (
    <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box
    
    sx={{
      width: { xs:'90%' ,sm:'75%' ,md: '45%' ,lg:'30%'},
      height: "95%",
      display: 'flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
    }}
  >
    
    <div>
    <img alt='krimou' 
    src={story.content} 
    style={{width:"100%",height:'100%' , background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, '}}
      />
    <div  style={{
          position: 'absolute',
          top: '5%',
          left: '21%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          display:'flex',
          alignItems:'center',
          padding: '0.5rem'}} >
            
            <Avatar
            alt="Remy Sharp"
            src={ story.author ? (open === true? story.author.imageUrl :"") : "" }
            sx={{ width: 44, height: 44 , mr:2 }}
            />
            
    <Typography
    variant="body2" 
    gutterBottom
    component="div"
      >
        { story.author ? (open === true ? story.author.name :"") : ""}
      </Typography>
      </div>
      <div  style={{
      position: 'absolute',
      top: '5%',
      right: '0%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      display:'flex',
      alignItems:'center',
      padding: '0.5rem'}}> 

        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}  
        id="basic-button"
        aria-controls={ouvrier ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ouvrier ? 'true' : undefined}
        onClick={handleClick} >
        <MoreHoriz />
      </IconButton>
  </div>
    </div>
  
   
  </Box>
  </Modal>
  <div><DeleteStories  anchorEl={anchorEl} setAnchorEl={setAnchorEl} ouvrier={ouvrier} story={story} stories={stories} open={open} setOpen={setOpen} /></div>
  </div>
 
  )
}
