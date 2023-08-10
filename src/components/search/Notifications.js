import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { NotBox } from './NotBox';
export const Notifications = ({stateNot,toggleDrawerNot}) => {
  return (
    <div>
         {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={stateNot[anchor]}
            onClose={toggleDrawerNot(anchor, false)}
          >
    <Box
      sx={{ width:{ xs:250 ,sm:450} }}
      role="presentation"
     
    >
      <Box sx={{borderBottom:2 , borderBottomColor:'gray' }}>
        <Typography sx={{padding:2}} variant="h4" gutterBottom>
        Notifications
      </Typography>
      </Box>

      <NotBox/>
        </Box>

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
