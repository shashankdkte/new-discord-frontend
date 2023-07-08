import io from "socket.io-client";
import { setFriends, setOnlineUsers, setPendingInvitations } from "../store/actions/friendsAction";
import store from "../store/store";
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
}


