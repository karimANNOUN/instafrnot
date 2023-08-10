import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector,useDispatch } from 'react-redux';
import { setAuthUser, setIsAuth } from '../../store/cartSlice';

export const Deconnect = ({deconnect,anchorEl,setAnchorEl,allUser}) => {
  const dispatch=useDispatch()
    const user = useSelector(state=> state.app.authUser)
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
       {user.id === allUser.id ? <MenuItem onClick={logout}>Logout</MenuItem> : <MenuItem disabled onClick={logout}>Logout</MenuItem> }
      </Menu>
    </div>
  )
}
