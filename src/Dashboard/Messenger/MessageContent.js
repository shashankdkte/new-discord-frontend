import React, { useEffect } from 'react'
import { styled } from "@mui/system";
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { getDirectChatHistory } from '../../realTimeCommunication/socketConnection';

const Wrapper = styled("div")({
  flexGrow:1
})
const MessageContent = ({ chosenChatDetails }) => {
  
  // useEffect(() => {
  //   getDirectChatHistory({
  //    receiverUserId:chosenChatDetails.id
  //  }) 
  // },[])
  useEffect(() => {
    //TO DO
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id
    });
    // FETCHING

  },[chosenChatDetails])
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  )
}

export default MessageContent