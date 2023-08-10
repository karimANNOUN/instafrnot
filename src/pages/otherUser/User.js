
import React , {useEffect, useState} from 'react'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import LinkJoy from '@mui/joy/Link';
import IconButton from '@mui/material/IconButton';
import { useSelector ,useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PostUser } from './PostUser';
import { ModiferProfiluser } from './ModiferProfiluser';
import { Deconnect } from './Deconnect';
import { PerseonelUserStory } from './PerseonelUserStory';
import { setUserPosts ,setNotifications ,setChekNot  } from '../../store/cartSlice';
import { BoxFollowers } from './BoxFollowers';
import { BoxFollowing } from './BoxFollowing';

export const User = () => {
    const params=useParams();
    const [open, setOpen] = React.useState(false);
    const [show , setShow]= React.useState(false)
    const [showFollowers , setShowFollowers]= React.useState(false)
    const [showFollowing , setShowFollowing]= React.useState(false)
    const [allUser,setAllUser] = useState({})
    

    const [storyUser,setStoryUser]=useState({})

    const [openStories, setOpenStories] = React.useState(false);
    const dispatch =useDispatch()


    const [anchorEl, setAnchorEl] = React.useState(null);
    const deconnect = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);}



    const user = useSelector(state=> state.app.authUser)
    
    
   
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 4,
            touchMove:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                 
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
              }
            ]
          };

          useEffect(()=>{
          
            async function getAllUser () {
              try{
                axios.get(`${process.env.REACT_APP_HOST}/personelusers/${params.id}`,{
                  withCredentials:true
                }) 
                .then(res=>setAllUser(res.data))
                .catch(err=>console.log(err))
              }catch(error){ 
                console.log(error)
              }
             
            }
            getAllUser()
            
           
            

            if(open === true){
            async function getPostUser () {

              try{
                axios.get(`${process.env.REACT_APP_HOST}/p/${params.postId}`,{
                  withCredentials:true
                }) 
                .then(res=>dispatch(setUserPosts(res.data)))
                .catch(err=>console.log(err))
              }catch(error){
                console.log(error)
              }


            
            }
            getPostUser()
          }

          if(openStories === true){
            async function getStoryUser () {

              try{
                axios.get(`${process.env.REACT_APP_HOST}/storieuser/${params.storyuserId}`,{
                  withCredentials:true
                }) 
                .then(res=>setStoryUser(res.data))
                .catch(err=>console.log(err))
              }catch(error){
                console.log(error)
              }

             
            }
            getStoryUser()
          }
         // eslint-disable-next-line
          },[open,openStories])


          const userPosts = useSelector(state=> state.app.userPosts)

 const handelPostFolow=async()=>{
 
  try{
    const response = await fetch(`${process.env.REACT_APP_HOST}/followers`,{
      credentials:'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {allUser } )
  })
  const data=await response.json()
  setAllUser(data.user)
  dispatch(setNotifications(data.notification))
  
  dispatch(setChekNot(true))
  }catch(error){
    console.log(error)
  }
 
 }

 const handelDelete=async()=>{

  try{
    const response = await fetch(`${process.env.REACT_APP_HOST}/followersdelete`,{
      credentials:'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {allUser } )
  })
  setAllUser(await response.json())
  }catch(error){
    console.log(error)
  }

 
 }


  return (
    <div>
         <Box sx={{ mx:'auto'}} >
      <Box sx={{display:'flex' , mb:4 , mt:6 , justifyContent:{ xs:'flex-start' ,sm:'center'} }} >
      <Avatar sx={{width:{xs:80 ,sm:130}, height: {xs:80 ,sm:130} , mr:{ xs:2 ,sm:9}}} src={ allUser.imageUrl || "" } alt="karim announ"  />
      <Box>
        <div style={{display:'flex'}}>
      <Typography variant="h6" gutterBottom>
      {allUser.name}
      </Typography>
      {user.id === allUser.id ? (<Button variant="contained" color="inherit" onClick={()=>setShow(true)} sx={{mx:3}} >
       Modifier Profil
      </Button>) : ( !allUser.followers ? <Button variant="contained" color="primary" onClick={handelPostFolow} sx={{mx:3}} >follow</Button> : ( !allUser.followers.find(fol=> fol.followId === user.id)  ? <Button variant="contained" color="primary" onClick={handelPostFolow} sx={{mx:3}} >follow</Button>  : <Button variant="contained" color="inherit" onClick={handelDelete}  sx={{mx:3}} >Suivi</Button>) )}
      
      <IconButton 
        aria-controls={deconnect ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={deconnect ? 'true' : undefined}
        onClick={handleClick}
        aria-label="settingsRounded">
      <SettingsRoundedIcon sx={{ fontSize: { xs:20 ,sm:40} }} />
      </IconButton>
      </div>
      <div>
      <div style={{display:'flex' , marginTop:6}}>
      <Typography variant="subtitle2" gutterBottom>
      <LinkJoy
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
      >
       { !allUser.posts ? '0' : allUser.posts.length }  publications
       </LinkJoy>
      </Typography>
      <Typography variant="subtitle2" gutterBottom  sx={{mx:{xs:2,sm:6}}}>
      <LinkJoy
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
        onClick={()=>setShowFollowers(true)}
      >
      {!allUser.followers ? '0' : allUser.followers.length} followers
      </LinkJoy>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
      <LinkJoy
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
        onClick={()=>setShowFollowing(true)}
      >
      {!allUser.following ? '0' : allUser.following.length} suivi(e)s
      </LinkJoy>
      </Typography> 
      </div>
      <div>
      <Typography variant="body2" gutterBottom sx={{textAlign:'left'}}>
      🔹✏️ { allUser.name} <br/>

{ !allUser.profile ? ' ' : allUser.profile.bio   }
      </Typography>
      </div>
      </div>
      
     
      </Box>
      </Box>
    <Box sx={{width:{ xs:'100%' ,sm:'42%'} , mx:{xs:1,sm:"auto"}}}>
     
    <Slider {...settings}  >
    {!allUser.story ? ' '  : (allUser.story.map((stories)=>(
      <div key={stories.id} stories={stories} >
        <Link to={`storieuser/${stories.id}`}>
        <Avatar  sx={{ width: 56, height: 56 , my:3 , }} alt="Remy Sharp" src={stories.content} onClick={()=>setOpenStories(true)} />
        </Link>
        <PerseonelUserStory openStories={openStories} setOpenStories={setOpenStories} storyUser={storyUser} />
      </div>)

))}
 </Slider>
 
    </Box>
       
    <Box sx={{ display:'flex',maxWidth:{ xs:'90%' ,sm:'68%'} ,borderTop:'1px' , borderColor:'gray' , flexWrap:'wrap'  , mx:{xs:0 ,sm:'auto'} , justifyContent:'center' ,borderTopStyle:'solid', }}>
      
    
       <Typography variant="overline" display="block" sx={{mb:3}} gutterBottom>
       PUBLICATIONS
      </Typography>
      
      <Grid container gap={1}  >
      { !allUser.posts ? ' '  : (allUser.posts.map(post=>
    <Grid  item key={post.id} post={post}  >
      <Link to={`p/${post.id}`}>
      <img style={{width:300,height:300}} src={post.content} alt='hibro' onClick={()=>setOpen(true)} />
      </Link >
      <PostUser open={open}  setOpen={setOpen} key={post.id} post={post} allUser={allUser} userPosts={userPosts} />
     </Grid>) 
    )}
   </Grid>
    </Box>

    </Box>
    <div><ModiferProfiluser show={show} setShow={setShow} setAllUser={setAllUser} /></div>
    <div><Deconnect anchorEl={anchorEl} deconnect={deconnect} setAnchorEl={setAnchorEl} allUser={allUser} /></div>
    <div><BoxFollowers showFollowers={showFollowers} setShowFollowers={setShowFollowers} allUser={allUser}  /></div>
    <div><BoxFollowing showFollowing={showFollowing} setShowFollowing={setShowFollowing} allUser={allUser} /></div>
    </div>
  )
}
