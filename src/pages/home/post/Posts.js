import React, { useEffect, useState }  from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import 'swiper/css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CardPost } from './CardPost';
import { Box, Typography } from '@mui/material';
import { Stories } from '../stories/Stories';
import { useSelector ,useDispatch } from 'react-redux';
import { setPostJdid ,setStoryUser } from '../../../store/cartSlice';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
export const Posts = () => {
  const dispatch=useDispatch()
  const user = useSelector(state=>state.app.authUser)
  const storyUser = useSelector(state=>state.app.storyUser)
  const photoJdida = useSelector(state=>state.app.postJdid)
 
  const [open, setOpen] = React.useState(false);
  const [story,setStory]=useState({})

  
  const params = useParams()

// eslint-disable-next-line  
  const handleOpen = () => {
    setOpen(true) ;
  };
    
      useEffect(()=>{
     async function getPosts(){
      try{
        axios.get(`${process.env.REACT_APP_HOST}/allposts`,{ 
          withCredentials:true
        }) 
        .then(res=>dispatch(setPostJdid(res.data))  )
        .catch(err=>console.log(err))
      }catch(error){
        console.log(error)
      }
    
     }
     getPosts()

     async function getStories(){
      try{
        axios.get(`${process.env.REACT_APP_HOST}/allstories`,{ 
          withCredentials:true
        }) 
        .then(res=>dispatch(setStoryUser(res.data))  )
        .catch(err=>console.log(err))
      }catch(error){
        console.log(error)
      }
    
     }
     getStories()

       
   
    if(open === true){
      async function getStoryId(){
        try{
          await axios.get(`${process.env.REACT_APP_HOST}/getstory/${params.id}/${params.storiesId}`,{ 
            withCredentials:true
          }) 
          .then(res=>setStory(res.data)  )
          .catch(err=>console.log(err))
        }catch(error){
          console.log(error)
        }
       
       }
        getStoryId ()
    }
       

    
   // eslint-disable-next-line      
      },[open])
    
      

      
     
   


    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 4,
      touchMove:true,
      centerPadding:'50px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
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
  return (
    <div >
    <Box sx={{ display:"flex" ,flexDirection:"column" ,mx:{ xs:'auto' ,md:"auto"} , justifyContent:{ xs:'center',lg:'flex-end'} , width:{ xs:'90%' ,sm:'70%'}   }} >
    <Stack >
    <Slider {...settings}  >
     
    { !storyUser ? "" : storyUser.map((stories)=>(
      <Box sx={{display:'flex'}} key={stories.id} stories={stories}  >
        <Link to={`getstory/${stories.authorId}/${stories.id}`}>
        <Avatar  sx={{ width: 56, height: 56 , mt:3  }} alt="Remy Sharp" src={stories.author.imageUrl} onClick={handleOpen} />
        </Link>
        <Typography sx={{ display:'flex' ,justifyContent:'flex-start' , mx:"auto"}}>{ stories.author.name.length>6 ? stories.author.name.slice(0, 6)+'...' : stories.author.name }</Typography>
      
      <Stories open={open} setOpen={setOpen} story={story} stories={stories} />
      
      </Box>
))}


     
    </Slider>
    <div>
    { user ? ( !photoJdida ? "" :  photoJdida.map(pos=>(<CardPost key={pos.id} pos={pos} />))) : <CardPost/>  } 
    </div>
    

    </Stack>
   
    </Box>
    
    </div>
  )
}
