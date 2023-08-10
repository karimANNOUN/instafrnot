import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const DeleteStories = ({ouvrier , anchorEl , setAnchorEl ,story , setOpenStories }) => {
   
    const handleClose = () => {
        setAnchorEl(null);
      };

      const handelDelete = async()=>{
         const storieId=story.id
         setAnchorEl(null)
         setOpenStories(false)
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
           
          //  navigate('/personel')
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
      
        { <MenuItem onClick={handelDelete}>Delete</MenuItem> }
        
      </Menu>
    </div>
  )
}
