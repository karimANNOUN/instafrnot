import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector ,useDispatch } from 'react-redux';
import { useState , useEffect } from 'react';

import { setUserPosts } from '../../store/cartSlice';
export const DeleteComment = ({ouvrier , anchorEl , setAnchorEl , com}) => {
  const user = useSelector(state=> state.app.authUser)
  const userPosts = useSelector(state=> state.app.userPosts)
  const dispatch=useDispatch()
  const handleClose = () => {
      setAnchorEl(null);
    };

    const [commentId,setCommentId]=useState()
  
     useEffect(()=>{
       setCommentId(com.id)
   },[user,com.id])
      
   const handelDelete = async()=>{
    const postId=userPosts.id
    try{
      const response = await fetch(`${process.env.REACT_APP_HOST}/deletecomment`,{
        credentials:'include',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {commentId,postId}  )
    })
    const data = await response.json()
    dispatch(setUserPosts(data.user))
    }catch(error){
      console.log(error)
    }
   

}
  return (
    <div>
       <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={ouvrier}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {user.id === com.author.id ? <MenuItem onClick={handelDelete}>Delete</MenuItem> : <MenuItem disabled onClick={handleClose}>Delete</MenuItem>  }
        
      </Menu>
    </div>
  )
}
