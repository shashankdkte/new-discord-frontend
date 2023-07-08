import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATION: "FRIENDS.SET_PENDING_FRIENDS_INVITATION",
  SET_ONLINE_USERS:"FREINDS.SET_ONLINE_USERS"
}

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation:(data) => dispatch(acceptFriendInvitation(data)),
  rejectFriendInvitation:(data) => dispatch(rejectFriendInvitation(data))
  }
}

export const setPendingInvitations = (pendingFriendsInvitations) => {
  console.log(pendingFriendsInvitations)
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATION,
    pendingFriendsInvitations
  }
}

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends
  }
}

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  }
}

export const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);
    if (response.error)
    {
      dispatch(openAlertMessage(response.exception?.response?.data));
    }
    else
    {
      dispatch(openAlertMessage("Invitation accepted"))
    }
  }
}

export const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);
    if (response.error)
    {
      dispatch(openAlertMessage(response.exception?.response?.data));
    }
    else
    {
      dispatch(openAlertMessage("Invitation rejected"))
    }
  }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error)
    {
      dispatch(openAlertMessage(response.exception?.response?.data));

    }
    else
    {
      dispatch(openAlertMessage("Invitation has been sent"));
      closeDialogHandler();
    }
  }
}