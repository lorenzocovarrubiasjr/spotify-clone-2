import React from "react";
import "./Player.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import PlayerBody from "../../Components/PlayerBody/PlayerBody";
import Footer from "../../Components/Footer/Footer";

import { useStateValue } from "../../StateProvider";

function Player() {
  const [{ spotify }] = useStateValue();

  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <PlayerBody spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
