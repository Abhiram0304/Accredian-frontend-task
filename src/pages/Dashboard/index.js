import { Box } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../services/operations/AuthAPI'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
    dispatch(logout(navigate));
  }

  return (
    <Box sx={{backgroundColor:"black",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"cursive",fontWeight:"900",fontSize:"3rem",color:"white", gap:"1rem", flexDirection:"column"}}>
        DASHBOARD
        <Box onClick={handleLogout} sx={{padding:"0.5rem", display:"flex", justifyContent:"center",alignItems:"center", background: "rgba( 221, 207, 207, 0.2 )",boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",backdropFilter: "blur( 0.75rem )",border: "2px solid rgba( 255, 255, 255, 0.18 )", borderRadius:"0.5rem", color:"white",fontSize:"0.9rem", fontWeight:"800", ":hover":{cursor:"pointer", transform:"scale(1.05)"}, transition:"all 0.2s"}}>Logout</Box>
    </Box>
  )
}

export default Dashboard