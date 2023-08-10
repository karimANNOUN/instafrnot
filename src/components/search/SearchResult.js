import { Box } from '@mui/material'
import React from 'react'
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';



export const SearchResult = ({products,toggleDrawer }) => {


  const handelClick =()=>{
    toggleDrawer( false)
  }
  return (
    <Box>
       
      <List>
        {products.map((product) => (
          <ListItem key={product.id} >
            <Link to={`/users/${product.id}`}  style={{width:'100%',textDecoration:'none'}} >
          <ListItemButton onClick={handelClick} >
          <Avatar sx={{mr:2}} alt="Remy Sharp" src={product.imageUrl || ""} />
         
            <ListItemText primary={product.name} />
            
          </ListItemButton>
          </Link>
          </ListItem>
        ))}
      </List>

    </Box>
  )
}
