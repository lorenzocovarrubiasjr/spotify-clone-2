import React, { useEffect } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";

import { getTokenFromUri } from "./spotify";
import { useStateValue } from "./StateProvider";
import Login from "./Containers/Login/Login";
import Player from "./Containers/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUri();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      );

      spotify.getPlaylist("37i9dQZEVXcTiiGUUGhdcL").then((playlist) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          playlist,
        })
      );
    }

    dispatch({
      type: "SET_SPOTIFY",
      spotify,
    });
  }, [user, token, dispatch]);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
