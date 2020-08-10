/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-unused-expressions

import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, Input,InputLabel } from '@material-ui/core';
import Message from "./Message.js";
import { Card } from '@material-ui/core';
import firebase from"firebase";
import db from "./firebase.js";
function App() {
  const [input,setInput]=useState("");
  const [username,setUsername]=useState("");

  const [message,setMessage]=useState([]);
const sendMessages=(e)=>{
  e.preventDefault();
  db.collection("messages").add({
    name:username,
    text:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput("");
}
useEffect(()=>{
  db.collection('messages').orderBy("timestamp","desc").onSnapshot(snapshot=>{
   setMessage(snapshot.docs.map(doc=>doc.data()
   ))
  })
},[])
useEffect(() => {
setUsername(prompt("enter your username"));
},
  []);

  return (
    <div className="main" >
      <h1>wlcome to my chat app</h1>
  <h5>welcome {username}</h5>
      <FormControl>
  <InputLabel >Type message...</InputLabel>
  <Input value={input} onChange={(e)=>{
       setInput(e.target.value);  
      }} aria-describedby="my-helper-text" />
</FormControl>
      <Button disabled={!input} onClick={sendMessages} type="submit" variant="contained" color="secondary">
  Send Message
</Button>
    <div className="massage_area">
      {message.map(data=>{ 
      return( 
      // <Card className="card">{data.name}: { data.text}</Card>
      <Message name={data.name} text={data.text}/>

      )
      })}
      </div>
   
    </div>
  );
}

export default App;
