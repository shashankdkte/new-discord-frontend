import React, { useEffect } from 'react'
import { styled } from "@mui/system";
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { connect } from "react-redux";
import { getActions } from '../store/actions/authActions';
import { logout } from '../shared/utils/auth';
import { connnectWithSocketServer } from '../realTimeCommunication/socketConnection';
import Room from './Room/Room';

 const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display:"flex"
  })
const Dashboard = ({setUserDetails, isUserInRoom}) => {

  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails)
    {
      logout()
    }
    else
    {

      setUserDetails(JSON.parse(userDetails));
      connnectWithSocketServer(JSON.parse(userDetails));
      }
  },[])
  
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar/>
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  )
}
const mapStateToProps = ({ room }) => {
  return {
    ...room,
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);