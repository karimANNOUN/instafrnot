import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { ComSearch } from './ComSearch';
export const Search = ({state,toggleDrawer}) => {

  return (
    
     <div>
       {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
    <Box
      sx={{ width:{ xs:250 ,sm:450} }}
      role="presentation"
     
    >
      <ComSearch toggleDrawer={toggleDrawer(anchor, false)}/>
        </Box>

          </Drawer>
        </React.Fragment>
      ))}
     </div>
 

   
  )
}
