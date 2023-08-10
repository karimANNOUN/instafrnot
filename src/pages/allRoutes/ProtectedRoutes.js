import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export const ProtectedRoutes = ({children}) => {
   
    const authUser = useSelector(state=> state.app.isAuth)
   
   
    
    
   
    return authUser === true ? children : <Navigate to="/login"/>

}

 
