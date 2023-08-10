import React from 'react'

export const AllComments = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}> 
    <div style={{display:'flex'}}>
        <Typography variant="subtitle2" gutterBottom sx={{mr:1}}>{com.author.name }</Typography>
        <Typography variant="caption" gutterBottom>{com.content}</Typography>
        </div>
        <div>
        { user.id == com.author.id ? (<IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}  
        id="basic-button"
        aria-controls={ouvrier ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ouvrier ? 'true' : undefined}
        onClick={handleClick} >
        <MoreHoriz />
      </IconButton>) : "" }
      <DeleteComments ouvrier={ouvrier}  anchorEl={anchorEl}  setAnchorEl={setAnchorEl} com={com} />
        </div>
    </div>
  )
}
