import io from "socket.io-client";

let socket = null;

export const connnectWithSocketServer = () => {
  socket = io("http://localhost:5002");

  socket.on("connect", () => {
    console.log("Successfully connected with socket io server");
    console.log(socket.id)
  })
}