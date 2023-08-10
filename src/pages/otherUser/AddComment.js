import React from 'react'
import Button from '@mui/material/Button';

import Box from '@mui/joy/Box';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';

import Face from '@mui/icons-material/Face';

import Link from '@mui/joy/Link';
import { useState , useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setUserPosts ,setChekNot,setNotifications } from '../../store/cartSlice';
import { BoxLikes } from './BoxLikes';

export const AddComment = ({post}) => {
  const user = useSelector(state=> state.app.authUser)
  const [comments,setComments]=useState("")
  const [like,setLike]=useState(false)
  const [show , setShow]= React.useState(false)

  
  const dispatch=useDispatch()
  const userPosts = useSelector(state=> state.app.userPosts)
  const handelOpen=()=>{
    setShow(true)
  }
  
  const handelComment=async(e)=>{
  
   if (comments === "") {
    
   }else{
    const postId=userPosts.id
    const postAuthId=userPosts.authorId
    e.preventDefault()
    try{
      const response = await fetch(`${process.env.REACT_APP_HOST}/createComment`,{
        credentials:'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {comments , postId , postAuthId } )
    })
    const data = await response.json()
    dispatch(setUserPosts(data.user))
    dispatch(setNotifications(data.notification))
    dispatch(setChekNot(true))
    setComments("")
    }catch(error){
      console.log(error)
    }
   
 // console.log(await response.json())

   }
  }


  const handelLikesdecrement=async()=>{
    
    
  const postId=userPosts.id
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
    dispatch(setUserPosts(data.user))
  }catch(error){
    console.log(error)
  }
 
 // dispatch(setLikeNumb(await response.json()))
  
  }
  
  const handelLikes=async()=>{
    
    const postId=userPosts.id
    const postAuthId=userPosts.authorId

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
      dispatch(setUserPosts(data.user))
      dispatch(setNotifications(data.notification))
      dispatch(setChekNot(true))
    }catch(error){
      console.log(error)
    }
   
  }


  useEffect(()=>{
   
    if (userPosts.like) {
      const isLiked= userPosts.like.find(likepost=> likepost.author.id === user.id)
      if (isLiked) {
        setLike(true)
    }else{
        setLike(false)
    }  
    }
     // eslint-disable-next-line
  },[userPosts])






  return (
    <div> 
       <CardContent>
      <Link
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
        onClick={handelOpen}
        
        
      >
        { !userPosts.like ? 0 :userPosts.like.length } Likes
      </Link>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
    <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
    {!like ?  (<IconButton variant="plain" color="neutral" size="sm" onClick={handelLikes}   >
         <FavoriteBorder />
        </IconButton>) : (<IconButton variant="plain" color="neutral" size="sm" onClick={handelLikesdecrement}  >
          <FavoriteIcon sx={{color:'red'}} />
        </IconButton>) }
      <IconButton variant="plain" color="neutral" size="sm">
        <ModeCommentOutlined />
      </IconButton>
    
    </Box>
  
    
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
  <div><BoxLikes show={show} setShow={setShow} userPosts={userPosts}  /></div>
  </div>
  )
}
