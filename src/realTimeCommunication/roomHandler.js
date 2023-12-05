import { setOpenRoom, setRoomDetails } from "../store/actions/roomActions";
import store from "../store/store";
import * as socketConnection from "./socketConnection";
export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom()
}


export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails))
}
export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  // store.dispatch(setRoomDetails(roomDetails))
  console.log("new active rooms from store");
  console.log(activeRooms);
}