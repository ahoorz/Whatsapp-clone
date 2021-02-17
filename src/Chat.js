import React from 'react'
import "./Chat.css";
import { Avatar,IconButton } from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Attachfile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';



function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/nerd.svg`} />
            
            <div classNam="chat__header__info">
                <h3 className="room">Room Name</h3>
                <p className="Last">Last Seen at ...</p>
            </div>
            
            <div className="chat__headerRight">

            <IconButton>
                <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>    
                <Attachfile />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>

            </div>
            </div>
           
            <div className="chat__body"></div>
            <div className="chat__footer"></div>

            </div>
    
    )
}

export default Chat
