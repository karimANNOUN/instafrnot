import { createSlice } from "@reduxjs/toolkit";



//hadi management state redux ta5dem nafs lkhedma ta reducer w contex bah net7akmou f state mn blasa wa7da brk 
const cartBio= createSlice({
    
    name:"userAuth",
    initialState:{
       
        newBio:{} 
       
          
    },
    reducers:{ // add w remove edouma houwa 7wayj habina hna n'apliqiwhm f state bah yakhjdmoulna khedma 7abina tsema 7na li dernehm 
      
       setNewBio:(state,action)=>{
        state.authUser=action.payload
       },

    }
})

export const { setNewBio }=cartBio.actions;
export const cartReducerBio = cartBio.reducer;