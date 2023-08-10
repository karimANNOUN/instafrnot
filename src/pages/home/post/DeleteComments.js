import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector ,useDispatch } from 'react-redux';

import {  setPostJdid } from '../../../store/cartSlice';

export const DeleteComments = ({ouvrier,anchorEl,setAnchorEl,com,pos}) => {
    const user = useSelector(state=> state.app.authUser)
    const dispatch = useDispatch()
    const handleClose = () => {
        setAnchorEl(null);
      };

     // const coments = useSelector(state=> state.app.commentPosts)
       
      const handelDelete = async()=>{
        try{
          const postId=pos.id
          const commentId=com.id
          const response = await fetch(`${process.env.REACT_APP_HOST}/deletecomment`,{
          credentials:'include',
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {commentId,postId}  )
      })
      const data = await response.json()
      dispatch(setPostJdid(data.postJdid))
      setAnchorEl(null);
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
        { user.id === com.author.id ? <MenuItem onClick={handelDelete}>Delete</MenuItem> : <MenuItem disabled onClick={handleClose}>Delete</MenuItem>   }
        
      </Menu>
    </div>
  )
}
