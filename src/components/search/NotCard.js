import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NotCard = ({not}) => {
  return (
    <Box sx={{width:"100%" , height:60 , alignItems:'center',display:'flex' , ml:1  }} >
      
     <div style={{alignItems:'center',display:'flex'}} >  
     
     <Link to={`users/${not.author.id}`} >
     
    <Avatar src={not.author.imageUrl} alt='krimou' />
    </Link>
    <div style={{display:'flex' ,flexDirection:'column'}} >
    <Typography sx={{mx:2 , fontSize:18 }} >{not.author.name}   </Typography>
    <Typography variant="caption" sx={{mx:2 ,display:{xs:'none',sm:'block'} }} >{not.createdAt}   </Typography>
    </div>
    { not.isFollow === true ? (<Typography variant="caption" sx={{mr:2}} >a commencé a vous suivre</Typography>) : (<Typography variant="caption" sx={{mr:2}} >{not.isLiked === true ? "a aimé votre photo" : "a commenter votre photo" }</Typography>)}
    </div> 
    <div style={{height:"70%",alignItems:'center'}} >
       { not.isFollow === true ? "" :  (<Link to={`personel`} > 
    <img src={!not.posts ? "" : not.posts.content } alt='kimou' style={{height:"100%" , width:42 }} />
    </Link>) }
    </div>
    </Box>
  )
}
