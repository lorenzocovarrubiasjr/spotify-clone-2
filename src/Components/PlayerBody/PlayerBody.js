import React from "react";
import "./PlayerBody.css";

import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import { useStateValue } from "../../StateProvider";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function PlayerBody({ spotify }) {
  const [{ discover_weekly }] = useStateValue();

  return (
    <div className="playerbody">
      <Header />

      <div className="body-info">
        <img src={discover_weekly?.images[0]?.url} alt="Discover Weekly" />
        <div className="body-infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((track) => (
          <SongRow track={track.track} />
        ))}
      </div>
    </div>
  );
}

export default PlayerBody;
