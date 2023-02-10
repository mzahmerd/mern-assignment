import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useAuthStatus } from '../hooks/useAuthStatus'

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()


    if(checkingStatus){
        return
    }
    
  return  loggedIn ? <Outlet/> : <Navigate to='/login' />

}

export default PrivateRoute