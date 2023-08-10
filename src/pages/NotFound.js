import React from 'react'
import notFound from '../assets/notfound.jpg'
import { Box } from '@mui/material'
export const NotFound = () => {
  return (
    <div>
        <Box sx={{}} > 
            <img src={notFound} alt='krimou' style={{width:"50%",alignItems:'center'}} />
        </Box>
    </div>
  )
}
