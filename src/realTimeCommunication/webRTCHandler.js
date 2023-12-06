import { setLocalStream } from "../store/actions/roomActions"
import store from "../store/store"

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
}