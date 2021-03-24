import React from "react";
import "./Header.css";

import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          placeholder="Search for your favorite artists, songs, or albums"
          type="text"
        />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt="RQ" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
