import React from 'react'
import {Typography} from "@mui/material"

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant='h5' sx={{ color: "#F2F3F5" }}>
        Welcome Back
      </Typography>
      <Typography sx={{color:"#AFB4BC"}}>
      We are happy that you are with us
      </Typography>
    </>
  )
}

export default LoginPageHeader