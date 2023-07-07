import io from "socket.io-client";

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
}