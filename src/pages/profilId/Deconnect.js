import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { setAuthUser,setIsAuth } from '../../store/cartSlice';

export const Deconnect = ({deconnect,anchorEl,setAnchorEl}) => {
const dispatch=useDispatch()
    const handleClose = () => {
        setAnchorEl(null);
      };

      const logout = ()=>{
        window.open(`${process.env.REACT_APP_HOST}/logout`,"_self")
        dispatch(setAuthUser({}))
        dispatch(setIsAuth(false))   
      }
    
   
     
  return (
    <div>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={deconnect}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
