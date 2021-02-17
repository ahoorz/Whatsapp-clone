import React from 'react';
import './Sidebar.css';
import { Avatar,IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar_header">
       <IconButton>
       <Avatar />
       </IconButton>
        <div className="sidebar_headerRight">
    <IconButton>
    <DonutLargeIcon />  
     </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
            <IconButton>
            <MoreVertIcon /> 
                </IconButton> 
        
</div>
</div>

<div className="sidebar_search">
< div className="sidebar_searchContainer">
<IconButton>
<SearchOutlinedIcon />
</IconButton>
<input placeholder="Search Or start new Chat" type="text" />
</div>
</div>

<div className="sidebar_chat"></div>
<SidebarChat addNewChat />
<SidebarChat />
<SidebarChat />
<SidebarChat />
</div>

)
;

    }

export default Sidebar;
