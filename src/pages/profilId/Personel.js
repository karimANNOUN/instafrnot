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
import karim from '../../assets/photo.png'
import { ModefierProfile } from './ModefierProfile';
import { useSelector ,useDispatch } from 'react-redux';
import { PostPersonel } from './PostPersonel';
import IconButton from '@mui/material/IconButton';
import { Deconnect } from './Deconnect';
import { Link, useParams } from 'react-router-dom';
import {  setMyPosts, setNewBio } from '../../store/cartSlice';
import { PersonelStories } from './PersonelStories';
import LinkJoy from '@mui/joy/Link';
import { BoxFollowers } from './BoxFollowers';
import { BoxFollowing } from './BoxFollowing';

export const Personel = () => {
 const params = useParams()
 
  const [postUser,setPostUser]=useState([])
 const [show , setShow]= React.useState(false)
 const [open, setOpen] = React.useState(false);
 const [showFollowers, setShowFollowers] = React.useState(false);
 const [showFollowing, setShowFollowing] = React.useState(false);
 const [stories,setStories]=useState([])
 const [story,setStory]=useState({})
 const [follow,setFollow]=useState({})
 const dispatch=useDispatch()

 const [openStories, setOpenStories] = React.useState(false);


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
       
    async function getPostUser () {

try{
  axios.get(`${process.env.REACT_APP_HOST}/postuser`,{
    withCredentials:true
  }) 
  .then(res=>setPostUser(res.data))
  .catch(err=>console.log(err))
}catch(error){
  console.log(error)
}

     
    }
    getPostUser()

    if(open == true){
      async function getPostUser () {


        try{
          axios.get(`${process.env.REACT_APP_HOST}/profil/${params.personelId}`,{
            withCredentials:true
          }) 
          .then(res=>dispatch(setMyPosts(res.data)))
          .catch(err=>console.log(err))
        }catch(error){
          console.log(error)
        }
        


      
      }
      getPostUser()
      
    }

    async function getStoriesUser () {



      try{
        axios.get(`${process.env.REACT_APP_HOST}/storiesuser`,{
          withCredentials:true
        }) 
        .then(res=>setStories(res.data))
        .catch(err=>console.log(err))
      }catch(error){
        console.log(error)
      }
      

      
    }
    getStoriesUser()

    if(openStories == true){
    async function getStory () {


      try{
        axios.get(`${process.env.REACT_APP_HOST}/storiesuser/${params.storyId}`,{
          withCredentials:true
        }) 
        .then(res=>setStory(res.data))
        .catch(err=>console.log(err))
      }catch(error){
        console.log(error)
      }
      

      
    }
    getStory()
  }


  async function getFollow () {


    try{
      axios.get(`${process.env.REACT_APP_HOST}/followuser`,{
        withCredentials:true
      }) 
      .then(res=>setFollow(res.data))
      .catch(err=>console.log(err))
    }catch(error){
      console.log(error)
    }
    

   
  }
  getFollow()


  async function getBio () {


    try{
      axios.get(`${process.env.REACT_APP_HOST}/getbio`,{
        withCredentials:true
      }) 
      .then(res=>dispatch(setNewBio(res.data)))
      .catch(err=>console.log(err))
    }catch(error){
      console.log(error)
    }
    

    
  }
  getBio()


 
  },[open,openStories])
 // const storyUser= useSelector(state=>state.app.myStories)
  const myPosts= useSelector(state=>state.app.myPosts) 
  const bioJdid = useSelector(state=>state.app.newBio)
 // console.log(story)
  return (
    <div>
     <Box sx={{ mx:'auto'}} >
      <Box sx={{display:'flex' , mb:4 , mt:6 , justifyContent:{ xs:'flex-start' ,sm:'center'} }} >
      <Avatar sx={{ width:{xs:80 ,sm:130}, height: {xs:80 ,sm:130} , mr:{ xs:2 ,sm:9} }} src={ (user == null ? "" : user.imageUrl) || karim } alt="karim announ"  />
      <Box>
        <div style={{display:'flex'}}>
      <Typography variant="h6" gutterBottom>
      {(user == null ? "" : user.displayName) || (user == null ? "" : user.name)}
      </Typography>
      <Button variant="contained" color="inherit" onClick={()=>setShow(true)} sx={{mx:3 ,width:{xs:60 , sm:160} }} >
       Modifier Profil
      </Button>
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
      {postUser.length} publications
      </LinkJoy>
      </Typography>
      <Typography variant="subtitle2" gutterBottom sx={{mx:{xs:2,sm:6}}}>
      <LinkJoy
        component="button"
        underline="none"
        fontSize="sm"
        fontWeight="lg"
        textColor="text.primary"
        onClick={()=>setShowFollowers(true)}
      >
      {!follow.followers ? '0' : follow.followers.length} followers
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
      {!follow.following ? '0' : follow.following.length} suivi(e)s
      </LinkJoy>
      </Typography> 
      </div>
      <div>
      <Typography variant="body2" gutterBottom sx={{textAlign:'left'}}>
      {(user == null ? "" : user.name)} <br/>
🔹✏️ { !bioJdid ? "" : bioJdid.bio}
      </Typography>
      </div>
      </div>
      
     
      </Box>
      </Box>
    <Box sx={{width:{ xs:'100%' ,sm:'42%'} , mx:{xs:1,sm:"auto"}}}>
     
    <Slider {...settings}  >
    {stories.map((storie)=>(
      <div key={storie.id} storie={storie} >
        <Link to={`storiesuser/${storie.id}`}>
        <Avatar  sx={{ width: 56, height: 56 , my:3 , }} alt="Remy Sharp" src={storie.content} onClick={()=>setOpenStories(true)} />
        </Link>
        <PersonelStories openStories={openStories} setOpenStories={setOpenStories} story={story} />
      </div>

))}
 </Slider>
 
    </Box>
       
    <Box sx={{ display:'flex', maxWidth:{ xs:'90%' ,sm:'68%'} ,borderTop:'1px' , borderColor:'gray' , flexWrap:'wrap'  , mx:{xs:0 ,sm:'auto'} , justifyContent:'center' ,borderTopStyle:'solid', }}>
      
    
       <Typography variant="overline" display="block" sx={{mb:3}} gutterBottom>
       PUBLICATIONS
      </Typography>
      
      <Grid container gap={1}  >
      {postUser.map(post=>
    <Grid  item key={post.id} post={post}  >
      <Link to={`profil/${post.id}`}>
      
      <img style={{width:300,height:300}} src={post.content} alt='hibro' onClick={()=>setOpen(true)} />
      
      </Link>
      <PostPersonel open={open}  setOpen={setOpen} key={post.id} post={post}  />
     </Grid>
    )}
   </Grid>
    </Box>

    </Box>
    <div><ModefierProfile show={show} setShow={setShow}  /></div>
    <div><Deconnect anchorEl={anchorEl} deconnect={deconnect} setAnchorEl={setAnchorEl}  /></div>
    <div><BoxFollowers showFollowers={showFollowers} setShowFollowers={setShowFollowers} follow={follow} /></div>
    <div><BoxFollowing showFollowing={showFollowing} setShowFollowing={setShowFollowing} follow={follow} /></div>
   
    
    </div>
  )
}
