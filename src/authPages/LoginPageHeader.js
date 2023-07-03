import React from 'react'
import {Typography} from "@mui/material"

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant='h5' sx={{ color: "#2A2F4F" }}>
        Welcome Back
      </Typography>
      <Typography sx={{color:"#917FB3"}}>
      We are happy that you are with us
      </Typography>
    </>
  )
}

export default LoginPageHeader