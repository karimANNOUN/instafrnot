import { createSlice } from "@reduxjs/toolkit";



//hadi management state redux ta5dem nafs lkhedma ta reducer w contex bah net7akmou f state mn blasa wa7da brk 
const cartSlice= createSlice({
    
    name:"userAuth",
    initialState:{
        isAuth:false,
        newBio:{} ,
        authUser:{},
        postJdid:[],
        storyUser:[],
        myPosts:{},
        userPosts:{},
        story:{},
        likeNumb:[],
        commentPosts:{},
        likeNumbPersonel:[],
        notifications:[],
        chekNot:false,
        checkFollow:false,
        search:false
          
    },
    reducers:{ // add w remove edouma houwa 7wayj habina hna n'apliqiwhm f state bah yakhjdmoulna khedma 7abina tsema 7na li dernehm 
       setIsAuth:(state,action)=>{
        state.isAuth = action.payload;
       },
       setAuthUser:(state,action)=>{
        state.authUser=action.payload
       },
       setNewBio:(state,action)=>{
        state.newBio=action.payload
       },
       setPostJdid:(state,action)=>{
        state.postJdid=action.payload 
       },
       setStoryUser:(state,action)=>{
        state.storyUser=action.payload
       },
       setMyPosts:(state,action)=>{
        state.myPosts=action.payload
       },

       setStory:(state,action)=>{
        state.story=action.payload
       },
       setUserPosts:(state,action)=>{
        state.userPosts=action.payload
       },
       setLikeNumb:(state,action)=>{
        state.likeNumb=action.payload
       },
       setCommentPosts:(state,action)=>{
        state.commentPosts=action.payload
       },
       setLikeNumbPersonel:(state,action)=>{
        state.likeNumbPersonel=action.payload
       },
       setNotifications:(state,action)=>{
        state.notifications=action.payload
       },
       setChekNot:(state,action)=>{
        state.chekNot=action.payload
       },
       setCheckFollow:(state,action)=>{
        state.checkFollow=action.payload
       },
       setSearch:(state,action)=>{
        state.search=action.payload
       },


    }
})

export const { setNewBio,setIsAuth , setAuthUser , setPostJdid , setStoryUser , setMyPosts ,setStory,setUserPosts ,setLikeNumb ,setCommentPosts,setLikeNumbPersonel,setNotifications ,setChekNot,setCheckFollow,setSearch }=cartSlice.actions;
export const cartReducer = cartSlice.reducer;