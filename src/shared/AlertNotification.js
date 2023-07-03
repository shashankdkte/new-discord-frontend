import React from 'react'
import { Alert,Snackbar } from '@mui/material';


const AlertNotification = () => {
  return (
    <Snackbar
     anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={true}
      onClose={()=>{}}
      autoHideDuration={6000}
    >
      <Alert severity="info">{`This is an alert message`}</Alert>
    </Snackbar>
  )
}

export default AlertNotification