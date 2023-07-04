import React from 'react'
import { styled } from "@mui/system";
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';

const Dashboard = () => {
  const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display:"flex"
  })

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar/>
      <Messenger />
      <AppBar/>
    </Wrapper>
  )
}

export default Dashboard 