import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const DeleteStoryUser = ({ouvrier , anchorEl , setAnchorEl ,storyUser , setOpenStories }) => {
    const user = useSelector(state=> state.app.authUser)
    const navigate=useNavigate()
    const handleClose = () => {
        setAnchorEl(null);
      };

      const handelDelete = async()=>{
        const storieId=storyUser.id
        try{
          const response = await fetch(`${process.env.REACT_APP_HOST}/deletestories`,{
            credentials:'include',
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {storieId}  )
        })
        setAnchorEl(null)
        setOpenStories(false)
        navigate(`/users/${storyUser.authorId}`)
        console.log(await response.json())
        }catch(error){
         console.log(error)
        }
          
          // navigate(`users/${storyUser.author.id}`)
      // console.log(await response.json())
     
       
     
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

(user.id === storyUser.author.id ?  <MenuItem onClick={handelDelete}>Delete</MenuItem> :  <MenuItem disabled onClick={handleClose}>Delete</MenuItem>  )
        
:    ""    }
        
      </Menu>
    </div>
  )
}
