import React, { useEffect } from 'react'
import './SidebarChat.css';
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat}) {


    return (
        <div className="SidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/12.svg`} />

       
    <div className="SidebarChat_info">
    <h2>Room name</h2>
    <p>Last Message</p>
   </div>
   </div> 

       ) ;
}

export default SidebarChat;
