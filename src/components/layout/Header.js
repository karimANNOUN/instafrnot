import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Avatar from '@mui/material/Avatar';

import { OpenPhotos } from '../../pages/home/list/OpenPhotos';
import { useSelector  } from 'react-redux';

import { Search } from '../search/Search';


import { Notifications } from '../search/Notifications';

import LinkJoy from '@mui/joy/Link';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Header = () => {
  const user = useSelector(state=> state.app.authUser)
  
  const [open, setOpen] = React.useState(false);

 
 
 
  const handleClickOpen = () => {
    setOpen(true);
  };



 



const [state, setState] = React.useState({left: false});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};



const [stateNot, setStateNot] = React.useState({left: false});

const toggleDrawerNot = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setStateNot({ ...stateNot, [anchor]: open });
};










  return (
   
      <Box sx={{position:{ xs:'relative',md:'fixed'}  ,display:{xs:'flex',md:'block'} , borderRight:'2px',borderBottom:'2px', borderBottomWidth:'100%' , borderBottomStyle:{ xs:'solid' ,md:'none'} , borderRightStyle:{ xs:'none' ,md:'solid'}}}>
      
       <Box sx={{ width:'100%',height:{ xs:'100%',md:'100vh'}, bgcolor: 'background.paper'   }}>
      <nav aria-label="main mailbox folders">
        <List sx={{display:{xs:'flex',md:'block'}}}  >

        <ListItem disablePadding sx={{my:3}} > 
        <LinkJoy href={`/`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
        <ListItemText primary="Instagrame"  sx={{ fontFamily:"fasthand",textAlign:'left' ,fontStyle:"italic",ml:2 ,fontWeight:"bold",fontSize:26 ,display:{xs:'none',lg:'block'} } } />
        <ListItemButton sx={{display:{xs:'none',md:'block'}}} >
          
          <ListItemIcon>
          <InstagramIcon sx={{ fontSize: 35 , fontWeight:90 ,display:{xs:'none',md:'block',lg:'none'} }}  />
          
          </ListItemIcon>
         
          
        </ListItemButton>
        
        </LinkJoy>
      </ListItem>

         
        <ListItem disablePadding  > 
        <LinkJoy href={`/`} underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
     
        <ListItemButton  >
          
          <ListItemIcon >
          <HomeIcon sx={{ fontSize:{xs:22 ,sm:35} , fontWeight:90 }}  />
          </ListItemIcon>
          <ListItemText primary="Accueil" sx={{display:{xs:'none',lg:'block'} } } />
          
        </ListItemButton>
        
        </LinkJoy>
      </ListItem>



      {['left'].map((anchor) => (
      <React.Fragment key={anchor}>
<ListItem disablePadding > 
<ListItemButton onClick={toggleDrawer(anchor, true)}>
  <ListItemIcon>
  <SearchIcon sx={{ fontSize:{xs:22 ,sm:35} ,fontWeight:90 }} />
  </ListItemIcon>
  <ListItemText primary="Recherche" sx={{display:{xs:'none',lg:'block'} } } />
</ListItemButton>
</ListItem>
</React.Fragment>
))}



{['left'].map((anchor) => (
      <React.Fragment key={anchor}>
<ListItem disablePadding> 
<ListItemButton onClick={toggleDrawerNot(anchor, true)} >
  <ListItemIcon>
 <FavoriteBorderOutlinedIcon sx={{ fontSize:{xs:22 ,sm:35} ,fontWeight:90 }} />
  
  </ListItemIcon>
  <ListItemText primary="Notifications" sx={{display:{xs:'none',lg:'block'} } } />
</ListItemButton>
</ListItem>
</React.Fragment>
))}

<ListItem disablePadding > 
<ListItemButton onClick={handleClickOpen} >
  <ListItemIcon>
  <AddBoxOutlinedIcon  sx={{ fontSize:{xs:22 ,sm:35} ,fontWeight:90 }} />
  </ListItemIcon>
   <ListItemText primary="Gréer" sx={{display:{xs:'none',lg:'block'} } } />
</ListItemButton>
</ListItem>


<ListItem disablePadding > 

<LinkJoy href={`/personel`} underline="none"  fontSize="sm" fontWeight="lg" textColor="text.primary">
<ListItemButton  >

  <ListItemIcon>
  <Avatar sx={{ width:{ xs:22,sm:33}, height:{ xs:22,sm:33}}} alt="karim announ" src={   user == null ? "" : user.imageUrl } />
  </ListItemIcon>
 <ListItemText primary="Profil" sx={{display:{xs:'none',lg:'block'} } }  />
   
</ListItemButton>
</LinkJoy>


</ListItem>

     
        </List>
        <OpenPhotos open={open} setOpen={setOpen} />
        <Search state={state} setState={setState} toggleDrawer={toggleDrawer} />
        <Notifications stateNot={stateNot}  toggleDrawerNot={toggleDrawerNot} />
        </nav>
        
    </Box>
    </Box>
    
  )
}
