import React from 'react';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";



const CreateRoomButton = () => {

  const createRoomHandler = () => {
  
      //creating a room and sending info to server about this
}

  return (
    <Button sx={{
      width: "48px",
      height: "48px",
      borderRadius: "16px",
      margin: 0,
      padding: 0,
      minWidth: 0,
      marginTop: "10px",
      color: "white",
      backgroundColor:"#5865f2"
    }}>
      <AddIcon />
    </Button>
  )
}

export default CreateRoomButton