import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core"
import {AccessTimeIcon} from "@material-ui/icons"

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar 
          className="header_avatar"
          alt ='Name'
          scr ='Photo'
        />
        <AccessTimeIcon />
      </div>
      <div className ="header_search">
            {/*Seasch Icon*/}
            {/*Input */}
        </div>
        <div className="header-right">
          {/*Healp icon*/}
        </div>
    </div>
  );
}

export default Header;
