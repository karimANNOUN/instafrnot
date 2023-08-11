import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios'
import { setNotifications } from '../../store/cartSlice';
import { NotCard } from './NotCard';
export const NotBox = () => {
const dispatch=useDispatch()
const isAuth=useSelector(state=> state.app.isAuth)


useEffect(()=>{
  
    if (isAuth === true) {
      async function getNotifications(){
        try{
          axios.get(`${process.env.REACT_APP_HOST}/notifications`,{ 
            withCredentials:true
          }) 
          .then(res=>dispatch(setNotifications(res.data)))
          .catch(err=>console.log(err))
        }catch(error){
          console.log(error)
        }
      
       }
       getNotifications()
    }

 
 // eslint-disable-next-line
},[])

 // eslint-disable-next-line
const notifications = useSelector(state=> state.app.notifications)


  return (
    <div>
        { !notifications ? "" : notifications.map(not=> <NotCard key={not.id} not={not} />)} 
    </div>
  )
}
