import { setLocalStream, setRemoteStreams } from "../store/actions/roomActions"
import store from "../store/store";
import Peer from "simple-peer"
import * as socketConnection from "./socketConnection";


const getConfiguration = () => {
  const turnIceServers = null
  if (turnIceServers)
  {
    // use turn server credentials

  }
  else
  {
    console.warn("Use only stun server");
    return {
      iceServers: [
        {
          urls:"stun:stun.l.google.com:19302"
        }
      ]
    }
  }
}


const onlyAudioConstrainsts = {
  audio: true,
  video:false
}


const defaultConstraints = {
  video: true,
  audio:true,
}


export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constraints = onlyAudio ? onlyAudioConstrainsts : defaultConstraints

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream))
      callbackFunc()
    })
    .catch((err) => {
      console.log(err);
      console.log("Cannot get Access to Local")
    })
};

let peers = {}

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;
  if (isInitiator)
  {
    console.log("preparing new peer connection as initiator");

  }
  else
  {
    console.log("preparing new peer connection as not initiator");
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream:localStream
  })


  peers[connUserSocketId].on("signal", data => {
    const signalData = {
      signal: data,
      connUserSocketId:connUserSocketId
    }

    //pass signal ing data to other user

    socketConnection.signalPeerData(signalData)
    
    peers[connUserSocketId].on("stream", (remoteStream) => {
      //add new remote stream to server store
      console.log("remote stream came from other user");
      console.log("direct connection has been established");
      remoteStream.connUserSocketId = connUserSocketId;
      addNewRemoteStream(remoteStream)
    })
  })
}


export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;
  if (peers[connUserSocketId])
  {
    peers[connUserSocketId].signal(signal)
  }
}


const addNewRemoteStream = (remoteStream) => {

  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = []
  remoteStreams.forEach(stream => {
    if (stream.id !== remoteStream.id)
    {
      newRemoteStreams.push(stream)
    }
  })
  newRemoteStreams.push(remoteStream)

  
   store.dispatch(setRemoteStreams(newRemoteStreams))
}