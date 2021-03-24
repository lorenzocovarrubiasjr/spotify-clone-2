export const initialState = {
  user: null,
  spotify: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // token:
  //   "BQDhfHiaBlLgIQQofKvDNyAQCm7uIGi7wWT1AHNyANVQ_LxdTdVKBwAD2t093Vzp8x03eUf1-hXKHYMsa0k2T2nQI_-5jX-rZWBdPYsQqvfC4XEMqhskJET4FAfBPeCQeutI-RSn6-2Ee2gOPwnB-2-Ix7kdEganRjohNae9csFTMdki4tKN",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_SPOTIFY":
      return { ...state, spotify: action.spotify };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.playlist };
    default:
      return state;
  }
};

export default reducer;
