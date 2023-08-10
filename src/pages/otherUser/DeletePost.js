import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector ,useDispatch } from 'react-redux';
import { setPostJdid } from '../../store/cartSlice';

export const DeletePost = ({ouvrier , anchorEl , setAnchorEl , post ,setOpen}) => {
  const user = useSelector(state=> state.app.authUser)
  const userPosts = useSelector(state=> state.app.userPosts)

const dispatch = useDispatch()
  const handleClose = () => {
      setAnchorEl(null);
    };
    const handelDelete = async()=>{
      const postId=userPosts.id
      try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/deletepost`,{
          credentials:'include',
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {postId}  )
      })
      dispatch(setPostJdid(await response.json()))
    
      setAnchorEl(null);
      setOpen(false)
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
      
        {user.id === post.author.id ? <MenuItem onClick={handelDelete}>Delete</MenuItem> : <MenuItem disabled onClick={handleClose}>Delete</MenuItem>  }
        
      </Menu>
    </div>
  )
}
