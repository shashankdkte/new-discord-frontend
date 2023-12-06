import io from "socket.io-client";
import { setFriends, setOnlineUsers, setPendingInvitations } from "../store/actions/friendsAction";
import store from "../store/store";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat";
import * as roomHandler from "./roomHandler"
import * as webRTCHandler from "./webRTCHandler"
let socket = null;

export const connnectWithSocketServer = (userDetails) => {
  
  const jwtToken = userDetails?.token || null 
  socket = io("http://localhost:5002", {
    auth: {
      token:jwtToken
    }
  });

  socket.on("connect", () => {
    console.log("Successfully connected with socket io server");
    console.log(socket.id)
  })

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    console.log("pending Invitations came")
    console.log(pendingInvitations);
    store.dispatch(setPendingInvitations(pendingInvitations));
  })

  socket.on("friend-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends))
  })


  socket.on("online-users", (data) => {
  
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers))
  })

  socket.on("direct-chat-history", (data) => {
    console.log("chat history");
    console.log(data);
    updateDirectChatHistoryIfActive(data);
  })

  socket.on("room-create", (data) => {
    roomHandler.newRoomCreated(data)
  })

   socket.on("active-rooms", (data) => {
    roomHandler.updateActiveRooms(data)
   })
  
  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false)
    socket.emit("conn-init",{connUserSocketId:connUserSocketId})
    
  })

  socket.on("conn-init", (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connUserSocketId,true)
  })

    socket.on("conn-signal", (data) => {

    webRTCHandler.handleSignalingData(data)
  })
}


export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message",data)
}

export const joinRoom = (data) => {
  socket.emit("room-join",data)
}


export const leaveRoom = (data) => {
  socket.emit("room-leave", data)
}
export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
}

export const createNewRoom = () => {
  socket.emit("room-create")
}

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
}