import { Avatar,  Box,  Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/joy/IconButton';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { DeleteComment } from './DeleteComment';
import Link from '@mui/joy/Link'
export const BoxComment = ({com}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
 
  const ouvrier = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box  >
          <div style={{display:'flex', justifyContent:'space-between'}}> 
    <div style={{display:'flex' , alignItems:'center'}}>
    <Link href={`/users/${com.authorId}`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
    <Avatar src={com.author.imageUrl} sx={{ width: 24, height: 24 ,mr:2 }} alt='krim' />
        <Typography variant="subtitle2" gutterBottom sx={{mr:1}}>{com.author.name }</Typography>
        </Link>
        <Typography variant="caption" gutterBottom>{com.content}</Typography>
        </div>
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
    </div>
    <div><DeleteComment com={com} ouvrier={ouvrier}  anchorEl={anchorEl}  setAnchorEl={setAnchorEl} /></div>
    </Box>
  )
}
