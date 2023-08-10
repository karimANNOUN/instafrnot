import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { OpenPhotos } from './OpenPhotos';
import { useSelector } from 'react-redux';
import karim from '../../../assets/photo.png'
import { Search } from './Search';
export const RealList = () => {
  const user = useSelector(state=> state.app.authUser)

  const [show, setShow] = React.useState(false);
  const handleShow = () =>{
    setShow(true);
  }
 

  const [open, setOpen] = React.useState(false);



  

 // console.log("reallist",user)

  return (
    <div>
      <Box sx={{ width: '100%', maxWidth:'16%', bgcolor: 'background.paper'}}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding  > 
        <ListItemButton>
          <ListItemIcon>
          <HomeIcon sx={{ fontSize: 35 , fontWeight:10 }}  />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItemButton>
      </ListItem>

<ListItem disablePadding > 
<ListItemButton onClick={handleShow}> 
  <ListItemIcon>
  <SearchIcon sx={{ fontSize: 35 }} />
  </ListItemIcon>
  <ListItemText primary="Recherche" />
</ListItemButton>
</ListItem>

<ListItem disablePadding > 
<ListItemButton >
  <ListItemIcon>
  <ExploreOutlinedIcon sx={{ fontSize: 35 }} />
  </ListItemIcon>
  <ListItemText primary="Decouvrir" />
</ListItemButton>
</ListItem>

<ListItem disablePadding > 
<ListItemButton >
  <ListItemIcon>
  <PlayCircleFilledWhiteOutlinedIcon sx={{ fontSize: 35 }} />
  </ListItemIcon>
  <ListItemText primary="Reels" />
</ListItemButton>
</ListItem>

<ListItem disablePadding > 
<ListItemButton>
  <ListItemIcon>
  <Badge color="error" badgeContent={0} showZero><MapsUgcOutlinedIcon sx={{ fontSize: 35 }} /></Badge>
  </ListItemIcon>
  <ListItemText primary="Messages" />
</ListItemButton>
</ListItem>

<ListItem disablePadding > 
<ListItemButton>
  <ListItemIcon>
  <FavoriteBorderOutlinedIcon sx={{ fontSize: 35 }} />
  </ListItemIcon>
  <ListItemText primary="Notifications" />
</ListItemButton>
</ListItem>



<ListItem disablePadding > 

<ListItemButton>

  <ListItemIcon>
  <Avatar sx={{ width: 33, height: 33 }}  src={ (user == null ? "" : user.imageUrl) || karim } alt="karim announ" /> 
  </ListItemIcon>
  <ListItemText primary="Profil"  />
  
</ListItemButton>

</ListItem>

        </List>
        <OpenPhotos open={open} setOpen={setOpen} />
        <Search show={show} setShow={setShow} />
        </nav>

        
        
    </Box>
    
    </div>
  )
}

