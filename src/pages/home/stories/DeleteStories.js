import React from 'react'
import { useSelector  } from 'react-redux';

import { useNavigate} from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export const DeleteStories = ({anchorEl ,setAnchorEl ,ouvrier ,story ,setOpen }) => {
    const user = useSelector(state=> state.app.authUser)
    
    const navigate =useNavigate()
    const handleClose = () => {
        setAnchorEl(null);
      };


      const handelDelete = async()=>{
        const storieId=story.id
        setAnchorEl(null)
        setOpen(false)
        try{
          const response = await fetch(`${process.env.REACT_APP_HOST}/deletestories`,{
            credentials:'include',
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {storieId}  )
        })
       console.log(await response.json())
        }catch(error){
          console.log(error)
        }
         
      
           navigate('/')
   
     
       
     
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
        { ouvrier ? 

(user.id === story.author.id ?  <MenuItem onClick={handelDelete}>Delete</MenuItem> :  <MenuItem disabled onClick={handleClose}>Delete</MenuItem>  )
        
:    ""    }
       
        
      </Menu>
    </div>
  )
}
