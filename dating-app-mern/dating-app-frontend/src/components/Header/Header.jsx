import React from "react";
import "./HeaderStyles.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        className="header_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
        alt="header"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
