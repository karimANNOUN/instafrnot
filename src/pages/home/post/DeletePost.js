import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector ,useDispatch } from 'react-redux';
import {setPostJdid} from '../../../store/cartSlice'
import { useState , useEffect } from 'react';

export const DeletePost = ({open , anchorEl , setAnchorEl , pos}) => {
 const dispatch=useDispatch()
    const user = useSelector(state=> state.app.authUser)
   // const photoJdid = useSelector(state=> state.app.postJdid)
    
  const [postId,setPostId]=useState()
 
  useEffect(()=>{
    setPostId(pos.id)
    // eslint-disable-next-line
},[user])
    const handleClose = () => {
      setAnchorEl(null)
      };

      const handelDelete = async()=>{
        try{
          const response = await fetch(`${process.env.REACT_APP_HOST}/deletepost`,{
            credentials:'include',
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {postId}  )
        })
        dispatch(setPostJdid( await response.json()))
        
      }catch(error){
        console.log(error)
      }
    
        
       
       
    
    }
 
    

  return (
    <div>
         <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      
        {user.id === pos.author.id ? <MenuItem onClick={handelDelete}>Delete</MenuItem> : <MenuItem disabled onClick={handleClose}>Delete</MenuItem>  }
        
      </Menu>
    </div>
  )
}
