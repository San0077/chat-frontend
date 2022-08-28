
import "./App.css";
import io from 'socket.io-client'
import Chat from "./chat.js"
import { useState } from "react";

const socket = io.connect("https://tahcppa.herokuapp.com/")
function App() { 
   const [name,setname]= useState("")
   const [room,setroom]= useState("")
   const [show,setshow]= useState(false)
  
   const join=()=>{
    if(name !==""&& room !==""){
       socket.emit("join_room",room,name)
       setshow(true)
    }
   }
  return (
    <div className="App">
      {!show ?
      <div className="joinChatContainer">
      <h4>join a Room</h4>
       <input type="text"
       onChange={(event)=>{
           setname(event.target.value)
       }}
       
       />
       <input type="text"
         onChange={(event)=>{
          setroom(event.target.value)
      }}/>
       <button onClick={join}>join a room </button>
       </div>
       :
       <Chat socket={socket} room={room} name={name}/>}
      </div>
    
  );
}

export default App;
