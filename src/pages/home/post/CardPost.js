
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import Face from '@mui/icons-material/Face';


import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector ,useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useState , useEffect } from 'react';
import { DeletePost } from './DeletePost';

import { setPostJdid ,setNotifications,setChekNot } from '../../../store/cartSlice';
import { BoxComments } from './BoxComments';
import { BoxLikes } from './BoxLikes';

export const CardPost = ({pos}) => {
  const user = useSelector(state=> state.app.authUser)
  const dispatch=useDispatch()

 const [comments,setComments]=useState("")
 const [postId , setPostId]=useState()
 const [loading,setLoading]=useState("")
 const [count,setCount]=useState(0)
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [like,setLike]=useState(false)
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const [openComments, setOpenComments] = React.useState(false);
  const handleOpen = () => setOpenComments(true);
const [openLikes,setOpenLikes]=React.useState(false);
const handelLikesOpen =()=>{
  setOpenLikes(true)
}
  


 useEffect(()=>{
  if(user === undefined){
    setLoading("loading...")
  }else{
    setPostId(pos.id)
  }

 

  const isLiked= !pos.like ? "" : pos.like.find(likepost=> likepost.authorId === user.id)
    if (isLiked) {
        setLike(true)
    }else{
        setLike(false)
    }

// eslint-disable-next-line
 },[pos])






const handelComment=async(e)=>{
 
    if (comments === "") {
    
    }else{
      e.preventDefault()
      const postAuthId=pos.authorId
      try{
      const response = await fetch(`${process.env.REACT_APP_HOST}/createComment`,{
        credentials:'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {comments , postId ,postAuthId } )
    })
    const data = await response.json()
    dispatch(setPostJdid(data.postJdid))
    dispatch(setNotifications(data.notification))
    dispatch(setChekNot(true))
    setComments("")
  }catch(error){
    console.log(error)
  }
    }

 
  
 
}


const handelLikesdecrement=async()=>{
  
    setLike(false)
    setCount(count - 1)
  const postId=pos.id
  try{
  const response = await fetch(`${process.env.REACT_APP_HOST}/deletelike`,{
    credentials:'include',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( {user,postId} )
  })
  const data = await response.json()
  dispatch(setPostJdid(data.postJdid))

  }catch(error){
console.log(error)
  }
 


}

const handelLikes=async()=>{
  
    setLike(true)
    setCount(count + 1)
    const postId=pos.id
    const postAuthId=pos.authorId
    try{
    const response = await fetch(`${process.env.REACT_APP_HOST}/likes`,{
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {user,postId,postAuthId} )
  })
  const data = await response.json()
  dispatch(setPostJdid(data.postJdid))
  dispatch(setNotifications(data.notification))
  dispatch(setChekNot(true))

  }catch(error){
    console.log(error)
  }
 
}









  return (
    <div style={{marginRight:'auto'}}>
      <div>{loading}</div>
    <Card
    variant="outlined"
    sx={{
      minWidth: 300,
      mb:2,
      '--Card-radius': (theme) => theme.vars.radius.xs,
    }}
  >
    <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            m: '-2px',
            borderRadius: '50%',
            background:
              'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
          },
        }}
      >
         <Link href={`/users/${pos.authorId}`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
        <Avatar
          size="sm"
          src={ user ? pos.author.imageUrl : ""}
          sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
        />
        </Link>
      </Box>
      <Link href={`/users/${pos.authorId}`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
      <Typography fontWeight="lg">{ user ? pos.author.name : ""}</Typography>
      </Link>
      <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}  
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} >
        <MoreHoriz />
      </IconButton>
    </CardContent>
    <CardOverflow>
      <AspectRatio>
        <img src={ user ? pos.content : ""} alt="" loading="lazy" />
      </AspectRatio>
    </CardOverflow>
    <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
      <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
       {!like ?  (<IconButton variant="plain" color="neutral" size="sm" onClick={handelLikes} >
         <FavoriteBorder />
        </IconButton>) : (<IconButton variant="plain" color="neutral" size="sm" onClick={handelLikesdecrement}>
          <FavoriteIcon sx={{color:'red'}} />
        </IconButton>) } 
        <IconButton onClick={handleOpen} variant="plain" color="neutral" size="sm">
          <ModeCommentOutlined />
        </IconButton>
        
      </Box>
    
    </CardContent>
    <CardContent>
      <Link
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
        onClick={handelLikesOpen}
        
      >
        {!pos.like ? 0 :pos.like.length} Likes
      </Link>
      <Typography fontSize="sm">
      <Link href={`/users/${pos.authorId}`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
       
          { user ? pos.author.name : ""}
        </Link>{' '}
       
      </Typography>
      
      <Link
        component="button"
        underline="none"
        onClick={handleOpen}
        fontSize="sm"
        startDecorator="…"
        sx={{ color: 'text.tertiary' }}
      >
        comments
      </Link>
      <Link
        component="button"
        underline="none"
        fontSize="10px"
        sx={{ color: 'text.tertiary', my: 0.5 }}
      >
        { user ? pos.createdAt : ""}
      </Link>
    </CardContent>
    
    <CardOverflow sx={{ pb: 'var(--Card-padding)', display: 'flex' }}>
      <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
        <Face />
      </IconButton>
      
      <Input
        variant="plain"
        size="sm"
        placeholder="Add a comment…"
        value={comments}
        onChange={(e)=>setComments(e.target.value)}
        sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
      />
      <Button  onClick={handelComment} underline="none" role="button">
        Post
      </Button>
      
    </CardOverflow>
    
  </Card>
 <div><DeletePost anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl} pos={pos} /></div> 
 <div><BoxComments openComments={openComments} setOpenComments={setOpenComments} pos={pos} /></div>
 <div><BoxLikes openLikes={openLikes} setOpenLikes={setOpenLikes} pos={pos} /></div>
  </div> 
  )
}
